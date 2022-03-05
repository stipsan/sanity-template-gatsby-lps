import React from 'react';

export default function Left({ children }) {
  return (
    <aside className="bg--specials flex xpy-12 flex-1 justify-end py-20 laptop:py-24 laptop:pr-28">
      <div className="flex flex-col justify-evenly items-center grow-1 mb-7 w-full phablet:mb-0 xlaptop:pr-20 laptop:grow-0 laptop:w-512-5 xdesktop:pr-24 desktop:w-608-5">
        {children}
      </div>
    </aside>
  );
}
