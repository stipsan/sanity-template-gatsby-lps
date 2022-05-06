import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import clientConfig from '../../client-config';

const listRenderer = ({ type, children }) => {
  if (type === 'bullet') {
    return (
      <ul className="list-disc list-inside text-[18px] mb-5">{children}</ul>
    );
  }
  if (type === 'number') {
    return (
      <ol className="list-decimal list-inside text-[18px] mb-5">{children}</ol>
    );
  }
  return null;
};
const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node;

  if (style === 'normal') {
    return <p className="text-[18px] mb-5 leading-relaxed">{props.children}</p>;
  }

  if (style === 'h1') {
    return (
      <h1 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-5xl">
        {props.children}
      </h1>
    );
  }

  if (style === 'h2') {
    return (
      <h2 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-4xl">
        {props.children}
      </h2>
    );
  }

  if (style === 'h3') {
    return (
      <h3 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-3xl">
        {props.children}
      </h3>
    );
  }

  if (style === 'h4') {
    return (
      <h4 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-2xl">
        {props.children}
      </h4>
    );
  }

  if (style === 'h5') {
    return (
      <h5 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-xl">
        {props.children}
      </h5>
    );
  }

  if (style === 'h6') {
    return (
      <h6 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-lg">
        {props.children}
      </h6>
    );
  }

  return BlockContent.defaultSerializers.types.block(props); // Fall back to default handling
};
const FigureRenderer = ({ node }) => {
  const imageAssetId = node?.image?.asset?._ref;
  const imageData = getGatsbyImageData(
    imageAssetId,
    { maxWidth: 675 },
    clientConfig.sanity
  );
  const imageAlignment = node?.alignment;
  const floats = {
    left: 'tablet:float-left',
    right: 'tablet:float-right',
    none: 'tablet:float-none',
  };

  return (
    <GatsbyImage
      image={imageData}
      className={`hidden m-4 tablet:inline-block ${floats[imageAlignment]}`}
      alt=""
    />
  );
};
export default function Intro({ introText }) {
  return (
    <section
      id="intro"
      className="py-10 px-4 text-gray-alt phablet:px-0 tablet:py-20"
    >
      <div className="container mx-auto flex text-lg">
        <div className="flex-1">
          <BlockContent
            blocks={introText}
            serializers={{
              types: {
                block: BlockRenderer,
                figure: FigureRenderer,
              },
              list: listRenderer,
              listItem: ({ children }) => (
                <li className="leading-relaxed">{children}</li>
              ),
            }}
          />
          <div className="">
            <AnchorLink
              className="button--primary inline-block text-center mt-5 rounded-xl text-xl font-black px-8 py-3 uppercase phablet:text-2xl phablet:inline-block"
              to="#contact"
              title="Contact Us"
            >
              Request Service
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}
