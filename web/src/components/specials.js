import React from 'react';

export default function Specials({ specials }) {
  return (
    <div className="xbg--specials flex xpy-12 flex-1 justify-end w-full xlaptop:py-24">
      <div className="grid auto-rows-[1fr] gap-8 xmb-7 w-full xphablet:mb-0 xlaptop:pr-20 laptop:grow-0 laptop:w-512-5 xdesktop:pr-24 desktop:w-720-5 xretina:w-800">
        {specials.map((special, index, specials) => {
          //let couponMb = index === specials.length - 1 ? 'mb-0' : ''; //excludes margin bottom from last coupon
          return (
            <div
              className={`flex flex-col items-center justify-center gap-5 xw-3/4 xmy-6 m-3 bg-white xtext-gray-alt rounded-md border-2 border-dashed border-gray-500 shadow-custom p-3 xlaptop:w-full laptop:p-7 ${'xxxxcouponMb'}`}
              key={index}
            >
              <div className="text-center text-xl font-extrabold uppercase xtext-blue-primary phablet:text-2xl tablet:text-4xl desktop:text-[40px]">
                {special.title}
              </div>
                {special.details ? <div className="capitalize font-medium text-black-custom text-[18px]">{special.details}</div> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
