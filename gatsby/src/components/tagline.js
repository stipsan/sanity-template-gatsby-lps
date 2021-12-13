import React from 'react';
import Ornament from './utils/ornament';

export default function Tagline({ tagline, lineColor, textColor, iconSrc }) {
  return (
    <section id="tagline">
      <div className="container mx-auto text-center">
        {/* <hr className="ornament ornament--brand after:bg-white" /> */}
        <Ornament {...{ lineColor, iconSrc }} alt={'Company Icon'} />
        <h2 className="text--secondary font-extrabold text-[44px] mb-6 tablet:mb-10">
          {tagline}
        </h2>
      </div>
    </section>
  );
}
