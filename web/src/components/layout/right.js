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
      className="flex flex-1 justify-start special-locations-bg py-20 laptop:py-24 laptop:pl-16 desktop:pl-28"
      {...{ background }}
    >
      <div className="container mx-auto grow-1 justify-center w-full text-center text-white laptop:justify-start laptop:text-left laptop:bg-opacity-0 laptop:grow-0 laptop:w-486 laptop:mx-0 laptop:flex laptop:items-center desktop:w-608-5">
        <div className="w-full">{children}</div>
      </div>
    </Aside>
  );
}
