import React from 'react';
import FullwidthForm from './forms/fullwidth-form';

  
export default function Contact({email}) {
    return (
        <section id="contact" className="mt-36 mb-28">
            <div className="container mx-auto bg--form py-14 rounded-md">
                <h2 className="text-white text-4xl font-semibold text-center mb-6 text-magic phablet:text-2xl desktop:text-4xl tablet:text-5xl">Contact Our Specialists Today</h2>
                <FullwidthForm recipient={email} />
            </div>
        </section>
    );
}



