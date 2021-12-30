import React from 'react';
import styled from 'styled-components';

const Aside = styled.section`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 100%;
  background-color: #000;
  @media (min-width: 1100px) & (max-width: 1600px) {
    ul {
      max-width: 500px;
    }
  }
  @media (min-width: 1600px) {
    ul {
      max-width: 800px;
    }
  }
  li {
    overflow: hidden;
    width: calc(100%);
    white-space: nowrap;
    text-overflow: ellipsis;
    // display: -webkit-box;
    -webkit-box-orient: vertical;
    // -webkit-line-clamp: 1;
    // -webkit-column-break-inside: avoid;
  }
`;

export default function Right({ children, background }) {
  return (
    <Aside
      className="flex flex-1 justify-start special-locations-bg"
      {...{ background }}
    >
      <div className="container mx-auto flex-grow-1 justify-center w-full text-center text-white py-20 laptop:justify-start laptop:text-left laptop:pl-28 laptop:bg-opacity-0 laptop:flex-grow-0 laptop:w-512-5 laptop:mx-0 laptop:py-24 laptop:flex laptop:items-center desktop:w-720-5 retina:w-800">
        <div className="w-full">{children}</div>
      </div>
    </Aside>
  );
}
