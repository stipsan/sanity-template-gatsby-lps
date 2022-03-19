import React from 'react';
import styled from 'styled-components';
import SidebarForm from './forms/sidebar-form';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Hero = styled.div`
  background-image: url(${(props) => props.heroBackground});
`;

export default function HeroSection({
  heroBackground,
  heroTitle,
  heroSubTitle,
  heroContent,
  children,
  heroHideForm,
}) {
  return (
    <Hero
      id="hero"
      className="bg-hero bg-no-repeat bg-top py-14 px-4 flex items-center phablet:px-0 tablet:py-0 tablet:min-h-400 desktop:bg-cover"
      {...{ heroBackground }}
    >
      <div className="container mx-auto flex gap-4 justify-start tablet:justify-between">
        <div className="text-white flex flex-col justify-center xlaptop:basis-full xlaptop:py-16">
          <div className="xtext-magic uppercase flex flex-col gap-7">
            <AnchorLink to="#specials" className="border-highlight border-2 border-dashed rounded-2xl p-5 xmb-4 xphablet:mb-8 self-start">
              <div className="font-extrabold leading-none phablet:leading-snug phablet:text-4xl tablet:leading-snug tablet:text-6xl xdesktop:text-[80px] desktop:leading-tight">
                {heroTitle}
              </div>
              <div className="font-semibold phablet:text-4xl tablet:inline-block desktop:text-5xl">
                {heroSubTitle}
              </div>
            </AnchorLink>
            <div className="font-semibold text-base leading-none text-center tablet:font-normal tablet:text-xl">
              {heroContent}
            </div>
          </div>
        </div>
        <div
          className={`hidden ${
            heroHideForm ? '' : 'laptop:flex'
          } max-w-sm self-end laptop:align-bottom laptop:pt-1`}
        >
          <div className="bg--form py-6 pb-12 px-9 rounded-md relative tablet:-mb-8 tablet:mt-16 desktop:mt-34 desktop:-mb-16">
            <div className="uppercase text-center text-3xl font-extrabold mb-5">
              Schedule Now
            </div>
            {children}
          </div>
        </div>
      </div>
    </Hero>
  );
}
