import React from 'react';
import Ornament from './utils/ornament';
import iconSrc from '../images/review-icon.png';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

const Bubble = styled.div`
  &:after {
    content: '';
    position: absolute;
    top: 99%;
    left: 40px;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }
  .custom-scroller::-webkit-scrollbar {
    width: 4px;
  }
  .custom-scroller::-webkit-scrollbar-thumb {
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background: #ccc;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  .custom-scroller::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 4px;
    border-radius: 4px;
  }
`;

const Section = styled.section`
  background-image: url(${(props) => props.bg});
`;

export default function Testimonials({
  testimonials,
  testimonialBackground,
  lineColor,
}) {
  const renderSlides = () =>
    testimonials.map((testimonial, index) => (
      <blockquote className="px-3" key={index}>
        <Bubble className="bg--reviews-bubble rounded-2xl p-8 text-lg font-medium relative mb-10">
          <div className="custom-scroller overflow-y-auto h-32 px-1">
            "{testimonial.excerpt}"
          </div>
        </Bubble>
        <cite className="text-lg ml-12">{testimonial.author}</cite>
      </blockquote>
    ));
  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //initialSlide: 2,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     arrows: false,
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };
  return (
    <Section
      bg={testimonialBackground}
      id="testimonials"
      className="bg--reviews bg-no-repeat bg-top py-14 text-white laptop:pb-36 laptop:py-24 desktop:bg-cover"
    >
      <div className="container mx-auto">
        <Ornament {...{ iconSrc, lineColor }} alt={'Review Icon'} />
        <h2 className="text-center text-magic font-extrabold mb-9 tablet:text-4xl laptop:text-5xl laptop:mb-12">
          Our Customer Reviews
        </h2>
        <Slider {...settings}>{renderSlides()}</Slider>
      </div>
    </Section>
  );
}
