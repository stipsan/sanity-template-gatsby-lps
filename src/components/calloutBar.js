import React from 'react';

export default function CalloutBar({message, badgeSrc}) {
    //const logo = getGatsbyImageData(logo);
    return (
        <section id="call-out-bar" className="bg-gradient-to-r from-blue-primary via-blue-secondary to-blue-primary clear-both">
            <div className="container mx-auto flex flex-col py-8 items-center laptop:flex-row">
                <div className="flex-none">
                    <img
                        className="mb-8 laptop:mb-0"
                        src={badgeSrc}
                        alt=""
                    />
                </div>
                <div className="flex-1 text-white px-12 text-center text-xl font-semibold tablet:text-2xl">
                    {message}
                </div>
            </div>
        </section>
    );
}
