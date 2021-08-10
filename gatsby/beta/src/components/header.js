import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";

//import scrollTo from 'gatsby-plugin-smoothscroll';



//import { graphql } from 'gatsby';
//import { getGatsbyImageData } from 'gatsby-source-sanity'



export default function Header({logoSrc, phone}) {
    //const logo = getGatsbyImageData(logo);
    return (
        <header className="bg-white sticky top-0 z-10 laptop:static laptop:top-auto">
            <div className="mx-auto flex flex-wrap laptop:items-center laptop:container">
                <div className="flex-none rounded-md w-full laptop:w-auto laptop:flex-1">
                    <img className="py-6 mx-auto laptop:mx-0" alt="logo" src={logoSrc} />
                </div>
                <div
                    className="flex-none flex w-full phablet:flex-1 phablet:w-auto laptop:justify-end laptop:items-center"
                >
                    <AnchorLink
                        className="bg--secondary flex justify-center items-center w-full font-bold text-xl uppercase px-8 py-3 text-white laptop:inline-block laptop:w-auto laptop:rounded-lg"
                        to="#contact"
                        title="Schedule Now">
                        Schedule Now
                    </AnchorLink>
                </div>
                <div className="flex-1 flex items-center laptop:flex-initial laptop:justify-end">
                    <a
                        href={`tel:${phone}`}
                        className="bg--primary flex justify-center flex-col items-center w-full text-gray-alt font-semibold text-xl px-8 py-3 laptop:inline-block laptop:ml-7 laptop:rounded-lg laptop:w-auto"
                    >
                        Call Now! <br className="visible laptop:hidden" />
                        <span className="font-bold">{phone}</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
