import React from 'react';
import { graphql } from 'gatsby';
import { getGatsbyImageData } from 'gatsby-source-sanity'



export default function Header({logo, phone}) {
    //const logo = getGatsbyImageData(logo);
    console.log(logo, 'logo url')
    return (
        <header className="bg-white sticky top-0 z-10 laptop:static laptop:top-auto">
            <div className="mx-auto flex flex-wrap laptop:items-center laptop:container">
                <div className="flex-none rounded-md w-full laptop:w-auto laptop:flex-1">
                    <img className="py-6 mx-auto laptop:mx-0" alt="logo" src={logo} />
                </div>
                <div
                    className="flex-none flex w-full phablet:flex-1 phablet:w-auto laptop:justify-end laptop:items-center"
                >
                    <button
                    className="w-full bg-blue-primary font-bold text-xl uppercase px-8 py-3 text-white laptop:w-auto laptop:rounded-lg"
                    >
                    Schedule Now
                    </button>
                </div>
                <div
                    className="flex-1 flex items-center laptop:flex-initial laptop:justify-end"
                >
                    <button
                    className="w-full font-semibold text-xl bg-yellow-primary px-8 py-3 laptop:ml-7 laptop:rounded-lg laptop:w-auto"
                    >
                        Call Tomorrow! <br className="visible laptop:hidden" />
                        <span className="font-bold">{phone}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}