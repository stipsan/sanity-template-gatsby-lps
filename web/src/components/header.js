import React from 'react';

export default function Header({ logoSrc, phone }) {
  return (
    <header className="bg-white sticky top-0 z-10 laptop:static laptop:top-auto">
      <div className="mx-auto flex flex-wrap laptop:items-center laptop:container">
        <div className="flex-none rounded-md w-full laptop:w-auto laptop:flex-1">
          <img className="py-6 mx-auto laptop:mx-0" alt="logo" src={logoSrc} />
        </div>
        <div className="flex-none flex w-full phablet:flex-1 phablet:w-auto laptop:justify-end laptop:items-center">
          <a
            className={`button--secondary flex justify-center items-center w-full font-bold text-[22px] uppercase px-8 py-3 laptop:px-12 laptop:inline-block laptop:w-auto laptop:rounded-lg`}
            href="#contact"
            title="Schedule Now"
          >
            Schedule Now
          </a>
        </div>
        <div className="flex-1 flex items-center laptop:flex-initial laptop:justify-end">
          <a
            href={`tel:${phone}`}
            className="button--primary flex justify-center flex-col items-center w-full font-semibold text-[22px] px-8 py-3 laptop:px-12 laptop:inline-block laptop:ml-7 laptop:rounded-lg laptop:w-auto"
          >
            <span className="hidden laptop:inline">Call Now! </span>
            <span className="font-bold">{phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
