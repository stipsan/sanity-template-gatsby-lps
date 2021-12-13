import React from "react";

export default function Specials({ specials }) {
  return (
    <div className="bg--specials flex py-12 flex-1 justify-end w-full laptop:py-24">
      <div className="flex flex-col justify-evenly items-center flex-grow-1 mb-7 w-full phablet:mb-0 laptop:pr-20 laptop:flex-grow-0 laptop:w-512-5 desktop:pr-24 desktop:w-720-5 retina:w-800">
        {specials.map((special, index, specials) => {
          let couponMb = index === specials.length - 1 ? "mb-0" : ""; //excludes margin bottom from last coupon
          return (
            <div
              className={`flex flex-col items-center justify-between w-3/4 my-6 bg-white text-gray-alt rounded-md border-2 border-dashed border-black-alt shadow-custom p-3 laptop:w-full laptop:my-7 ${couponMb}`}
              key={index}
            >
              <div className="text-xl font-extrabold uppercase text-blue-primary phablet:text-2xl tablet:text-4xl desktop:text-[40px]">
                {special.title}
              </div>
              <div className="capitalize font-medium text-black-custom text-[18px]">
                {special.disclaimer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
