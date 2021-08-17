import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { CheckIcon } from '@heroicons/react/solid';
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import clientConfig from "../../client-config";

const Ul = styled.ul`
    list-style-type:'z'
`;
// const serializers = {
//     h1: props => <h1 className="text--secondary text-magic font-extrabold mb-3 phablet:text-3xl tablet:mb-14 laptop:text-5xl" {...props} />,
//     h2: props => <h2 className="text--secondary text-magic font-extrabold mb-3 phablet:text-3xl tablet:mb-12 laptop:text-4xl" {...props} />,
//     h3: props => <h3 className="text--secondary text-magic font-extrabold mb-3 phablet:text-3xl tablet:mb-10 laptop:text-4xl" {...props} />,
//     h4: props => <h4 className="text--secondary text-magic font-extrabold mb-3 phablet:text-3xl tablet:mb-8 laptop:text-3xl" {...props} />,
//     h5: props => <h5 className="text--secondary text-magic font-extrabold mb-3 phablet:text-3xl tablet:mb-6 laptop:text-2xl" {...props} />,
//     h6: props => <h6 className="text--secondary text-magic font-extrabold mb-3 phablet:text-3xl tablet:mb-4 laptop:text-xl" {...props} />,
//     ul: ({children}) => <ul className="list-disc pl-4 laptop:mr-16">{children}</ul>,
//     li: ({ children }) => <li className="mb-5">{children}</li>,
// }
const serializers = {
    types: {
        p: (props) => (
            <p class="text-2xl leading-9 mb-8">{props.node}</p>
        ),
    },
}
const listRenderer = ({type, children}) => {
    if (type === 'bullet') {
        return <Ul class="list-disc pl-4 laptop:mr-16">{children}</Ul>;
    }
    if (type === 'number') {
        return <ol class="list-decimal pl-4 laptop:mr-16">{children}</ol>;
    }
    return null;
}
const BlockRenderer = (props) => {
    console.log('cake: ',props)
    const {style = 'normal'} = props.node

    // if (/^h\d/.test(style)) {
    //     const level = style.replace(/[^\d]/g, '')
    //     return React.createElement(style, {className: `heading-${level}`}, props.children)
    // }

    if (style === 'normal') {
        return <p class="text-2xl leading-9 mb-8">{props.children}</p>
    }

    if (style === 'h1') {
        return <h1 class="text--secondary text-magic font-extrabold mb-3 phablet:text-3xl tablet:mb-14 laptop:text-5xl">{props.children}</h1>
    }

    if (style === 'h2') {
        return <h2 class="text--secondary text-magic font-extrabold mb-3 phablet:text-3xl tablet:mb-12 laptop:text-4xl">{props.children}</h2>
    }

    if (style === 'h3') {
        return <h3 class="text--secondary text-magic font-extrabold mb-3 phablet:text-3xl tablet:mb-10 laptop:text-4xl">{props.children}</h3>
    }

    if (style === 'h4') {
        return <h4 class="text--secondary text-magic font-extrabold mb-3 phablet:text-3xl tablet:mb-8 laptop:text-3xl">{props.children}</h4>
    }

    if (style === 'h5') {
        return <h5 class="text--secondary text-magic font-extrabold mb-3 phablet:text-3xl tablet:mb-6 laptop:text-2xl">{props.children}</h5>
    }

    if (style === 'h6') {
        return <h6 class="text--secondary text-magic font-extrabold mb-3 phablet:text-3xl tablet:mb-4 laptop:text-xl">{props.children}</h6>
    }

    if (style === 'figure') {
        return <div>cheese</div>;
    }

    // Fall back to default handling
    return BlockContent.defaultSerializers.types.block(props)
}
const FigureRenderer = ({node}) => {
    //console.log('figure: ', node);
    const imageAssetId = node.image.asset._ref;
    const imageData = getGatsbyImageData(imageAssetId, { maxWidth: 675 }, clientConfig.sanity);
    console.log('check', imageData)
    return <GatsbyImage image={imageData} style={{'float': 'right'}} />;

}
export default function Intro({introText}) {
    return (
        <section id="intro" className="py-10 px-4 text-gray-alt phablet:px-0 tablet:py-20">
            <div className="container mx-auto flex text-lg">
                <div className="flex-1">
                    <BlockContent
                        blocks={introText}
                        serializers={{
                            types: {
                                block: BlockRenderer,
                                figure: FigureRenderer
                            },
                            list: listRenderer,
                            listItem: ({children}) => <li class="mb-5">{children}</li>,
                        }}
                    />
                    <AnchorLink
                        className="mt-5 rounded-xl font-gray-231f20 text-2xl font-black bg--primary px-8 py-3 uppercase"
                        to="#contact" title="Contact Us">
                        Request Heating Repair
                    </AnchorLink>
                </div>
                <div className="flex-none">
                    <img className="hidden laptop:inline-block" src="img/pengion-tools.png" alt="" />
                </div>
            </div>
        </section>
    );
}