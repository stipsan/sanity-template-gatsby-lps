import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export default function Interlude({ interludeText, interludeImageSrc }) {
  return (
    <section id="interlude" className="px-4 phablet:px-0">
      <div className="container flex flex-col-reverse mx-auto py-16 text-gray-alt tablet:py-24 laptop:py-36 laptop:gap-7 laptop:flex-row">
        <div className="flex flex-col justify-center laptop:basis-1/2">
          <div>
          {interludeText.map((paragraph, index) => (
            <p
              className="text-xl tablet:text-2xl tablet:leading-9 mb-8"
              key={index}
            >
              {paragraph}
            </p>
          ))}
          <AnchorLink
            className="button--primary inline-block rounded-xl font-black text-xl px-8 py-3 uppercase phablet:text-2xl"
            to="#contact"
            title="Contact Us"
          >
            Contact Us Today
          </AnchorLink>
          </div> 
        </div>
        <div className="xflex xjustify-center xitems-center laptop:basis-1/2">
          <div className="laptop:sticky laptop:top-0">
            <img
              className="mx-auto mb-8 laptop:mb-0"
              src={interludeImageSrc}
              alt=""
            />
          </div>
       </div>
      </div>
    </section>
  );
}
