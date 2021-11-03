import React from 'react';
import FullwidthForm from './forms/fullwidth-form';

  
export default function Contact({email}) {
    return (
        <section id="contact" className="mt-36 mb-28">
            <div className="container mx-auto bg--form py-14 rounded-md">
                <h2 className="font-semibold text-center mb-7 text-3xl phablet:text-3xl tablet:text-4xl desktop:text-6xl retina:text-7xl">Contact Our Specialists Today</h2>
                <FullwidthForm recipient={email} />
            </div>
        </section>
    );
}



