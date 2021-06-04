import React from 'react';
import FullwidthForm from './forms/fullwidth-form';

  
export default function Contact({email}) {
    return (
        <section id="contact" className="my-24">
            <div className="container mx-auto bg-blue-primary py-11 rounded-md">
                <h2 className="text-white text-4xl text-center mb-5 text-magic phablet:text-2xl desktop:text-4xl tablet:text-5xl">Contact Our Specialists Today</h2>
                <FullwidthForm recipient={email} />
            </div>
        </section>
    );
}



