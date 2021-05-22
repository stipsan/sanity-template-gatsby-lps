import React from 'react';
import { graphql } from 'gatsby';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import styled from "styled-components"
import SidebarForm from './sidebar-form';



const Hero = styled.div`
  background-image: url(${props => props.bg});
`


export default function HeroSection({heroBg, title, subTitle, content}){
    return (
        <Hero id="hero" className="bg-hero bg-no-repeat bg-center bg-top px-4 py-7 phablet:px-0 tablet:py-0" bg={heroBg}>
            <div className="container mx-auto flex justify-center tablet:justify-start">
                <div className="flex-2 text-white flex flex-col justify-center laptop:pr-44 laptop:my-8 desktop:pr-60">
                    <div className="text-4xl font-extrabold uppercase tablet:text-7xl">
                        {title} <br className="hidden phablet:inline" />
                        <span className="font-semibold mt-1 tablet:inline-block">{subTitle}</span>
                    </div>
                    <p className="font-semibold mt-3 text-base tablet:font-normal tablet:mt-7 tablet:mb-16 tablet:text-xl">
                        {content}
                    </p>
                </div>
                <div className="flex-1 hidden tablet:block">
                    <div className="py-6 pb-12 px-9 bg-blue-primary rounded-md relative tablet:mt-8 tablet:mt-16 desktop:mt-28">
                        <div className="uppercase text-center text-3xl text-white font-extrabold mb-5">
                            Schedule Now
                        </div>
                        <SidebarForm />
                    </div>
                </div>
            </div>
        </Hero>
    );
}
