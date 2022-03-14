import { useState, useEffect } from "react";
import { useDocumentOperation } from "@sanity/react-hooks";
import sanityClient from "@sanity/client";
import slugify from "slugify";

const sanityClientConfig = {
  projectId:
    process.env.SANITY_STUDIO_API_PROJECT_ID || "<#< sanity.projectId >#>",
  dataset: process.env.SANITY_STUDIO_API_DATASET || "<#< sanity.dataset >#>",
  useCdn: false,
};

export default function SetSlugAndPublishAction(props) {
  const { patch, publish } = useDocumentOperation(props.id, props.type);
  const [isPublishing, setIsPublishing] = useState(false);

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false);
    }
  }, [props.draft]);

  return {
    disabled: publish.disabled,
    label: isPublishing ? "Publishing…" : "Publish",
    onHandle: async () => {
      // This will update the button text
      setIsPublishing(true);

      /// Get the sanity client for fetching referenced field values
      const client = sanityClient(sanityClientConfig);

      /// Set the initial slug value to the name field
      let slug = props.draft.label;

      /// Set the slug based on the document type
      switch (props.type) {
        case "page":
          /// The type of the reference field to get the value from
          const referenceNameType = "category";
          /// Query for the referenced "category" and return the "name" field of that referenced document
          const query = `*[_type == "${referenceNameType}" && _id == $nameRef][0] {label}`;
          /// Start with the "category: reference id in the draft
          let referenceLabel = props.draft.category._ref;
          /// Fetch the category referenced in this document
          await client
            .fetch(query, { nameRef: referenceLabel })
            .then((category) => {
              /// Set the referenceName to the category.name field
              referenceLabel = !!category ? category.label : referenceLabel;
            });

          // For the "page" type document, set the slug to [category.label]-[type]-[number]
          slug = `${slugify(referenceLabel)}/${slugify(props.draft.label)}`;
          // Set name field for the "page" type document to be the same value as the slug
          patch.execute([{ set: { slug: slug.toLowerCase() } }]);

          // Set the slug field of this document
          patch.execute([
            { set: { slug: { _type: "slug", current: slug.toLowerCase() } } },
          ]);

          break;

        default:
          /// Doing nothing? Consider deleting this switch statement to simplify your code.
          break;
      }

      // Perform the publish
      publish.execute();

      // Signal that the action is completed
      props.onComplete();
    },
  };
}
