import React from 'react';
import Ornament from './utils/ornament';
import icon from '../images/review-icon.png';
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Bubble = styled.div`
    &:after {
       content: "";
       position: absolute;
       top: 100%;
       left: 20px;
       border-top: 20px solid ${props => props.color};
       border-left: 20px solid transparent;
       border-right: 20px solid transparent; 
    }
`

export default function Testimonials({testimonials,color}) {
    const renderSlides = () =>
        testimonials.map(testimonial => (
            <div>
                <Bubble className="bg-yellow-primary rounded-2xl text-black-custom p-8 text-lg font-medium relative mb-7" color={color}>
                    {testimonial.excerpt}
                </Bubble>
                {testimonial.author}
            </div>
    ));
    return (
        <section id="testimonials" className="bg-blue-primary py-14 text-white">
            <div className="container mx-auto">
                <Ornament color={color} icon={icon} alt={'Review Icon'} />
                <h2 className="text-center text-4xl font-extrabold mb-9">Heating Repair Reviews</h2>
                <Slider dots={true} slidesToShow={2} slidesToScroll={2}>{renderSlides()}</Slider>
            </div>
        </section>
    );
}
