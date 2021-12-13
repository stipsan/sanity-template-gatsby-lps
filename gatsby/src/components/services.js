import React from "react";
import Ornament from "./utils/ornament";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Services({ services, lineColor, iconSrc }) {
  return (
    <section
      id="service-ctas"
      className="bg-gray-custom text-gray-alt py-12 tablet:pt-24 tablet:pb-36"
    >
      <div className="container mx-auto text-center">
        <Ornament {...{ lineColor, iconSrc }} alt={"Company Icon"} />
        <h2 className="text--secondary text-magic font-extrabold mb-6 phablet:mb-8 phablet:text-4xl laptop:text-5xl">
          We Can Assist You With:
        </h2>
        <div className="flex flex-wrap justify-center mx-auto">
          {services.map((service, index) => {
            return (
              <div
                className="flex-grow-0 flex-shrink-0 flex justify-center items-center flex-col capitalize py-3 px-4 m-3 phablet:m-4 bg-white rounded-md phablet:px-11 phablet:py-4 retina:py-8 retina:px:12"
                key={index}
              >
                <div>
                  <img
                    className="mb-4"
                    src={service.icon.asset.url}
                    alt={`${service.label} Icon`}
                  />
                </div>
                <div className="w-24 leading-7 tracking-tighter font-semibold text-[22px] tablet:w-36 retina:w-52">
                  {service.label}
                </div>
              </div>
            );
          })}
        </div>
        <AnchorLink
          className="button--primary uppercase rounded-xl px-10 mt-7 py-3 text-normal font-black mx-auto inline-block phablet:text-2xl"
          to="#contact"
          title="Contact Us"
        >
          Ready To Contact Us?
        </AnchorLink>
      </div>
    </section>
  );
}
