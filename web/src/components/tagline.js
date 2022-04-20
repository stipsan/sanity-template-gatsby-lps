import React from 'react';
import Ornament from './utils/ornament';

export default function Tagline({ tagline, lineColor, iconSrc }) {
  return (
    <section id="tagline">
      <div className="container mx-auto text-center pt-7 pb-6 laptop:pt-14 tablet:pb-10">
        <Ornament {...{ lineColor, iconSrc }} alt={'Company Icon'} />
        <h2 className="text--secondary leading-snug font-extrabold text-3xl phablet:text-4xl phablet:leading-snug tablet:text-5xl">
          {tagline}
        </h2>
      </div>
    </section>
  );
}
