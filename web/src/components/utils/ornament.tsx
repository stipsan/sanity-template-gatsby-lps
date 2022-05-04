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
  iconSrc: string;
  alt?: string;
  className: string;
}

export default function Ornament({ iconSrc, alt, className }: Props): JSX.Element {
  return (
    <CustomHR className={`border-highlight grid gap-4 grid-cols-layout max-w-xs mx-auto mb-4 ${className}`}>
      <img src={iconSrc} className={`max-w-[32px]`} alt={alt} />
    </CustomHR>
  );
}
