import React from 'react';

export default function Left({ children }) {
  return (
    <aside className="bg--specials flex py-12 flex-1 justify-end laptop:py-24">
      <div className="flex flex-col justify-evenly items-center flex-grow-1 mb-7 w-full phablet:mb-0 laptop:pr-20 laptop:flex-grow-0 laptop:w-512-5 desktop:pr-24 desktop:w-720-5 retina:w-800">
        {children}
      </div>
    </aside>
  );
}
