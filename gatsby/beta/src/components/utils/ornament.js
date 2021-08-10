import React from 'react';
import styled from "styled-components"


const CustomHR = styled.div`
    &:after, &:before {
        align-self: center;
        border-top: 2px solid ${props => props.lineColor}; 
        content: "";
    }
`;

export default function Ornament({iconSrc, lineColor, alt}) {
    //const logo = getGatsbyImageData(logo);
    return (
        <CustomHR className="grid gap-4 grid-cols-layout max-w-xs mx-auto mb-4" {...{lineColor}}>
            <img src={iconSrc} alt={alt} />
        </CustomHR>
    );
}
