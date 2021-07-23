import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
  
export default function Interlude({text, image}) {
    return (
        <section id="interlude">
            <div className="container flex flex-col-reverse mx-auto text-center py-16 phablet:py-24 laptop:py-36 laptop:flex-row">
                <div className="flex-1 pr-7">
                    {text.map( (paragraph) => (
                        <p className="mb-12 text-2xl">{paragraph}</p>
                    ))}                    
                    <AnchorLink
                        className="rounded-xl font-extrabold text-xl bg-yellow-secondary px-8 py-3 uppercase"
                        to="#contact" title="Contact Us">
                        Contact Us Today
                    </AnchorLink>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img className="mx-auto mb-8 laptop:mb-0" src={image} alt="" />
                </div>
            </div>
        </section>
    );
}
