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
       left: 30px;
       border-top: 20px solid ${props => props.color};
       border-left: 20px solid transparent;
       border-right: 20px solid transparent; 
    }

    & .custom-scroller::-webkit-scrollbar {
        width: 4px!important;
    }
    & .custom-scroller::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px!important;
        border-radius: 10px!important;
        background: #ccc!important;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.5)!important;
      }
      
      & .custom-scroller::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
        -webkit-border-radius: 4px!important;
        border-radius: 4px!important;
      }
`

export default function Testimonials({testimonials,color}) {
    const renderSlides = () =>
        testimonials.map(testimonial => (
            <blockquote className="p-3">
                <Bubble className="bg-yellow-primary rounded-2xl text-black-custom p-8 text-lg font-medium relative mb-7" color={color}>
                    <div className="custom-scroller overflow-y-auto h-36">
                        {testimonial.excerpt}
                    </div>                    
                </Bubble>
                <cite class="ml-8">{testimonial.author}</cite>
            </blockquote>
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
