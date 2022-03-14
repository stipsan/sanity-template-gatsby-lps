// figure.js
export default {
  name: "figure",
  type: "object",
  title: "Figure",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
      options: { metadata: ["lqip"] },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative Text",
    },
    {
      name: "alignment",
      title: "Alignment",
      type: "string",
      options: {
        list: [
          { title: "Float Right", value: "right" },
          { title: "Float Left", value: "left" },
          { title: "No Float", value: "none" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
      initialValue: "right",
    },
  ],
};
