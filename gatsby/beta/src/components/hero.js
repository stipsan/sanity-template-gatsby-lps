import React from 'react';
import styled from "styled-components"
import SidebarForm from './forms/sidebar-form';



const Hero = styled.div`
  background-image: url(${props => props.heroBackground});
`


export default function HeroSection({heroBackground, heroTitle, heroSubTitle, heroContent, emailRecipient}){
    return (
        <Hero id="hero" className="bg-hero bg-no-repeat bg-center bg-top px-4 flex items-center min-h-400 retina:bg-cover" {...{heroBackground}}>
            <div className="container mx-auto flex justify-center tablet:justify-start">
                <div className="flex-1 text-white flex flex-col justify-center laptop:pr-44 laptop:py-16 desktop:pr-60">
                    <div className="text-4xl font-extrabold uppercase tablet:text-6xl desktop:text-7xl">
                        {heroTitle} <br />
                        <span className="font-semibold mt-1 phablet:text-5xl tablet:inline-block">{heroSubTitle}</span>
                    </div>
                    <p className="font-semibold mt-3 text-base tablet:font-normal tablet:text-xl">
                        {heroContent}
                    </p>
                </div>
                <div className="hidden laptop:block laptop:pt-16">
                    <div className="bg--form py-6 pb-12 px-9 rounded-md relative tablet:-mb-8 tablet:xmt-16 desktop:xmt-28">
                        <div className="uppercase text-center text-3xl font-extrabold mb-5">
                            Schedule Now
                        </div>
                        <SidebarForm recipient={emailRecipient} />
                    </div>
                </div>
            </div>
        </Hero>
    );
}
