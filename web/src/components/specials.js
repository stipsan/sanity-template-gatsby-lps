import React from 'react';

export default function Specials({ specials }) {
  return (
    <div className="xbg--specials flex flex-1 justify-center w-full laptop:justify-end">
      <div className="grid auto-rows-[1fr] gap-8 w-full laptop:grow-0">
        {specials.map((special, index, specials) => {
          return (
            <div
              className={`flex flex-col text-center items-center justify-center gap-3 m-3 bg-white text-gray-alt rounded-2xl border-2 border-dashed border-gray-alt shadow-custom p-3`}
              key={index}
            >
              <div className="text-3xl font-extrabold uppercase tablet:text-3xl">
                {special.title}
              </div>
              {special.details ? (
                <div className="capitalize font-medium text-[18px]">
                  {special.details}
                </div>
              ) : null}
              {special.disclaimer ? (
                <div className="capitalize font-medium text-gray-600 text-[12px]">
                  {special.disclaimer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
