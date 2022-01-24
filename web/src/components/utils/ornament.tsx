import React from 'react';
import styled from 'styled-components';

const CustomHR = styled.div`
  &:after,
  &:before {
    align-self: center;
    border-style: solid;
    border-width: 2px;
    content: '';
  }
`;

interface Props {
  iconSrc: string
  alt?: string
}

export default function Ornament({ iconSrc, alt }: Props) {
  //const logo = getGatsbyImageData(logo);
  return (
    <CustomHR className="border-highlight grid gap-4 grid-cols-layout max-w-xs mx-auto mb-4">
      <img src={iconSrc} alt={alt} />
    </CustomHR>
  );
}
