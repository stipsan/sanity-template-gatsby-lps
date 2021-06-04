import React from 'react';
import Ornament from './utils/ornament';

export default function Tagline({tagline, color, icon}) {

    return (
        <secton id="tagline">
            <div className="container mx-auto text-center">
                {/* <hr className="ornament ornament--brand after:bg-white" /> */}
                <Ornament color={color} icon={icon} alt={'Review Icon'} />
                <h2 className="font-extrabold text-4xl text-blue-primary mb-6 tablet:mb-12">{ tagline }</h2>
            </div>
        </secton>
    );
}
