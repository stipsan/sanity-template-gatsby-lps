import React from 'react';

export default function Left({ id, children }) {
  return (
    <aside id={id} className="bg--specials flex xpy-12 flex-1 justify-end py-20 laptop:py-24 laptop:pr-16 desktop:pr-28">
      <div className="container mx-auto flex flex-col justify-evenly items-center grow-1 w-full phablet:mb-0 laptop:mx-0 laptop:grow-0 laptop:w-486 desktop:w-608-5">
        {children}
      </div>
    </aside>
  );
}
