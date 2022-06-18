import React from 'react';

export default function Interlude({ interludeText, interludeImageSrc }) {
  return (
    <section id="interlude" className="px-4 phablet:px-0">
      <div className="container flex flex-col-reverse mx-auto py-16 text-gray-alt tablet:py-24 laptop:py-36 laptop:gap-7 laptop:flex-row">
        <div className="flex flex-col justify-center laptop:basis-1/2">
          <div>
          {interludeText.map((paragraph, index) => (
            <p
              className="mb-5 text-[18px] leading-relaxed"
              key={index}
            >
              {paragraph}
            </p>
          ))}
          <a
            className="button--primary inline-block rounded-xl font-black text-xl px-8 py-3 uppercase mt-5 phablet:text-2xl"
            href="#contact"
            title="Contact Us"
          >
            Contact Us Today
          </a>
          </div> 
        </div>
        <div className="laptop:basis-1/2">
          <div className="laptop:sticky laptop:top-48">
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
