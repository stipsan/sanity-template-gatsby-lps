import React from "react";

export default function Badges({ badges }) {
  return (
    <section id="badges">
      <div className="container mx-auto flex flex-wrap justify-between items-center pb-9 desktop:gap-6">
        {badges.map((badge, index) => (
          <div
            className="flex justify-center py-3 w-full phablet:w-1/2 phablet:py-5 laptop:w-64 desktop:flex-shrink-0 desktop:flex-grow-0"
            key={index}
          >
            <img className="" src={badge.image.asset.url} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
