import React from 'react';
import styled from "styled-components";
import { LocationMarkerIcon } from '@heroicons/react/solid'

export default function Locations({locations, lineColor, serviceAreaBackground}) {
    locations = locations.map( ({location}) => location);

    let sortedLocations = locations.sort(function(locationA, locationB){
        return locationA.city.localeCompare(locationB.city);
    });
    return (
        <>
            <h2 className="text-5xl font-extrabold mb-1">Proudly Serving</h2>
            <h4 className="border-highlight text-xl mb-14 border-b-2 inline-block mx-auto">Residents in the areas surrounding</h4>
            <ul className="col-count-2 text-left text-lg tablet:col-count-3 laptop:col-count-2 laptop:ml-12">
            {
                sortedLocations.map((location,index) => (
                    <li className="mb-3 xlaptop:ml-8" key={index} title={location.city}>
                        <LocationMarkerIcon className="inline-block h-5 w-6 mr-1 text-[18px]"/>{location.city}
                    </li>
                ))
            }
            </ul>
        </>
    )
}
