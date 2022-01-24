import React from 'react';

export default function Split({ children }) {
  return (
    <section className="flex flex-wrap flex-col laptop:flex-row laptop:flex-nowrap">
      {children}
    </section>
  );
}
