import React from 'react';

  
export default function Interlude({text, image}) {
    return (
        <section id="interlude">
            <div className="container flex flex-col-reverse mx-auto text-center py-16 phablet:py-24 laptop:py-36 laptop:flex-row">
                <div className="flex-1 pr-7">
                    {text.map( (paragraph) => (
                        <p className="mb-12 text-2xl">{paragraph}</p>
                    ))}                    
                    <button className="rounded-xl font-extrabold text-xl bg-yellow-secondary px-8 py-3 uppercase">Contact Us Today</button> 
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img className="mx-auto mb-8 laptop:mb-0" src={image} alt="" />
                </div>
            </div>
        </section>
    );
}
