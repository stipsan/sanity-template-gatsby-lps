import React from 'react';
import Ornament from './utils/ornament';
import icon from '../images/review-icon.png';

export default function Testimonials({color}) {
    return (
        <section id="testimonials" className="bg-blue-primary py-14 text-white">
            <div className="container mx-auto">
                <Ornament color={color} icon={icon} alt={'Review Icon'} />
                <h2 className="text-center text-4xl font-extrabold mb-9">Heating Repair Reviews</h2>
                <div className="h-96 bg-yellow-primary rounded-2xl text-black-custom p-8 text-lg font-medium relative arrow-down">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quia fugiat voluptatem possimus animi voluptatum asperiores. Laudantium possimus cum voluptatum nobis reiciendis quidem dignissimos quis molestias maiores! Ipsa, ducimus maiores.
                </div>
            </div>
        </section>
    );
}
