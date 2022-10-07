import React from 'react';
import styled from 'styled-components';

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
      <div className="container mx-auto flex gap-4 justify-center tablet:gap-8 laptop:gap-12 laptop:justify-between">
        <div className="text-white flex flex-col justify-center basis-full">
          <div className="uppercase flex flex-col gap-7">
            <a
              href="#specials"
              className="border-highlight border-2 border-dashed rounded-2xl p-5 bg-black/50 text-center"
            >
              <div className="font-extrabold leading-none text-2xl phablet:leading-snug phablet:text-4xl tablet:leading-snug laptop:text-6xl desktop:leading-tight">
                {heroTitle}
              </div>
              <div className="font-semibold phablet:text-4xl tablet:inline-block desktop:text-5xl">
                {heroSubTitle}
              </div>
              <div className="font-semibold text-base leading-none text-center tablet:font-normal tablet:text-xl">
                {heroContent}
              </div>
            </a>
          </div>
        </div>
        <div
          className={`hidden ${
            heroHideForm ? '' : 'laptop:flex'
          } max-w-sm self-end laptop:align-bottom laptop:pt-1`}
        >
          <div className="bg--form min-w-0 py-6 pb-12 px-9 rounded-md relative tablet:-mb-8 tablet:mt-16 desktop:mt-34 desktop:-mb-16">
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
