import React from 'react';
import PortableText from 'react-portable-text';
import { CheckIcon } from '@heroicons/react/solid';
//import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links";


const serializers = {
    h2: props => <h2 className="text-magic font-extrabold text-blue-primary mb-3 phablet:text-3xl tablet:mb-14 laptop:text-4xl" {...props} />,
    ul: ({children}) => <ul className="list-disc pl-4 laptop:mr-16">{children}</ul>,
    li: ({ children }) => <li className="mb-5">{children}</li>,
}
  
export default function Intro({intro}) {
    return (
        <section id="intro" className="py-10 px-4 text-gray-alt phablet:px-0 tablet:py-20">
            <div className="container mx-auto flex text-lg">
                <div className="flex-1">
                    <PortableText
                        content={intro}
                        serializers={serializers}
                    />
                    <AnchorLink
                        className="mt-5 rounded-xl font-gray-231f20 text-2xl font-black bg-yellow-secondary px-8 py-3 uppercase"
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
