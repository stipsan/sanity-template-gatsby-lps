import React from 'react';
import styled from 'styled-components';
import SidebarForm from './forms/sidebar-form';

const Hero = styled.div`
  background-image: url(${(props) => props.heroBackground});
`;

export default function HeroSection({
  heroBackground,
  heroTitle,
  heroSubTitle,
  heroContent,
  emailRecipient,
  heroHideForm
}) {
  return (
    <Hero
      id="hero"
      className="bg-hero bg-no-repeat bg-top px-4 flex items-center min-h-400 retina:bg-cover"
      {...{ heroBackground }}
    >
      <div className="container mx-auto flex gap-48 justify-start tablet:justify-between">
        <div className="text-white flex flex-col justify-center laptop:basis-full xlaptop:w-1/2 xlaptop:pr-44 laptop:py-16 xdesktop:pr-60">
          <div className="text-magic uppercase">
            <div className="font-extrabold phablet:text-4xl tablet:text-6xl desktop:text-[80px]">
              {heroTitle}
            </div>
            <div className="font-semibold phablet:text-6xl tablet:inline-block desktop:text-7xl">
              {heroSubTitle}
            </div>
          </div>
          <p className="font-semibold mt-3 text-base tablet:font-normal tablet:text-xl">
            {heroContent}
          </p>
        </div>
        <div className={`hidden ${heroHideForm ? '' : 'laptop:flex'} laptop:align-bottom laptop:pt-1 max-w-sm`}>
          <div className="bg--form py-6 pb-12 px-9 rounded-md relative tablet:-mb-8 tablet:mt-16 desktop:mt-34 desktop:-mb-16">
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
