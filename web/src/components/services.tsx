import React from 'react';
import Ornament from './utils/ornament';

interface Service {
  icon?: string;
  label: string;
}

interface Props {
  services?: Array<Service>;
  lineColor: string;
  iconSrc: string;
}

export default function Services({
  services,
  lineColor,
  iconSrc,
}: Props): JSX.Element {
  return (
    <section
      id="service-ctas"
      className="bg-gray-custom text-gray-alt py-12 tablet:pt-24 tablet:pb-36"
    >
      <div className="container mx-auto text-center">
        <Ornament {...{ lineColor, iconSrc }} alt={'Company Icon'} />
        <h2 className="text--secondary text-magic font-extrabold mb-8 phablet:text-4xl tablet:mb-14 tablet:text-5xl">
          We Can Assist You With:
        </h2>
        <div className="flex flex-wrap gap-7 justify-center mx-auto">
          {services.map((service, index) => {
            return (
              <div
                className="grow-0 basis-56 shrink-0 flex justify-center items-center flex-col gap-4 capitalize px-4 py-6 xm-3 bg-white rounded-lg phablet:basis-2/5 tablet:px-0 laptop:basis-1/4 desktop:basis-64"
                key={index}
              >
                {service.icon ? (
                  <div>
                    <i
                      className={`icon-${service?.icon} text-7xl icon-color`}
                    ></i>
                  </div>
                ) : null}
                <div className="leading-7 tracking-tighter font-semibold text-[22px] tablet:w-44">
                  {service.label}
                </div>
              </div>
            );
          })}
        </div>
        <a
          className="button--primary uppercase rounded-2xl px-11 mt-8 py-5 text-normal font-black mx-auto inline-block phablet:text-2xl laptop:mt-12"
          href="#contact"
          title="Contact Us"
        >
          Ready To Contact Us?
        </a>
      </div>
    </section>
  );
}
