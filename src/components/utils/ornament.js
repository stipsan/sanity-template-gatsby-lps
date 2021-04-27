import React from 'react';
import styled from "styled-components"


const CustomHR = styled.div`
    &:after, &:before {
        align-self: center;
        border-top: 2px solid ${props => props.color}; 
        content: "";
    }
`;

export default function Ornament({icon, color, alt}) {
    //const logo = getGatsbyImageData(logo);
    return (
        <CustomHR className="grid gap-4 grid-cols-layout max-w-xs mx-auto mb-5" color={color}>
            <img src={icon} alt={alt} />
        </CustomHR>
    );
}
