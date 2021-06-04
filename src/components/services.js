import React from 'react';
import Ornament from './utils/ornament';

export default function Services({services, color, icon}) {
    return (
      <section id="service-ctas" className="bg-gray-custom py-12 tablet:pt-24 tablet:pb-36">
        <div className="container mx-auto text-center">
          <Ornament color={color} icon={icon} alt={'Company Icon'} />
          <h2 className="text-blue-primary text-magic laptop:text-5xl font-extrabold mb-8">We Can Assist You With:</h2>
          <div className="flex flex-wrap justify-center mx-auto">
            {
                services.map((service) => {
                    return <div className="flex-grow-0 flex-shrink-0 flex justify-center items-center flex-col capitalize py-4 px-6 m-4 phablet:m-7 bg-white rounded-md phablet:px-10 phablet:py-6">
                        <div><img className="mb-4" src={service.icon.asset.url} alt={`${service.label} Icon`} /></div>
                        <div className="w-32">{service.label}</div>
                    </div>
                })
            }
          </div>
          <a className="uppercase rounded-xl px-8 mt-5 py-3 text-2xl bg-yellow-primary font-extrabold mx-auto inline-block" href="#contact">Ready To Contact Us?</a>
        </div>
      </section>
    );
}
