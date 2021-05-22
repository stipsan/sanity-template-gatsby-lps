import React from 'react';

export default function Badges({badges}) {

    return (
        <section id="badges">
            <div className="container mx-auto flex flex-wrap justify-between content-center pb-9 gap-6">
                {
                    badges.map(( badge ) => (
                        <div className="flex-auto flex-shrink-0 self-center w-64">
                            <img className="mx-auto" src={badge.image.asset.url} alt="" />
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
