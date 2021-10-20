import React from 'react';
import styled from "styled-components";
import { LocationMarkerIcon } from '@heroicons/react/solid'



const Aside = styled.section`
  background-image: url(${props => props.serviceAreaBackground});
  background-repeat: no-repeat;
  background-size: cover;
`


export function Specials({specials}) {
    return (
        <aside className="bg--specials flex py-12 flex-1 justify-end laptop:py-24">
            <div className="flex flex-col justify-evenly items-center flex-grow-1 mb-7 w-full phablet:mb-0 laptop:pr-20 laptop:flex-grow-0 laptop:w-512-5 desktop:pr-24 desktop:w-720-5">
                {
                    specials.map( (special, index, specials) => {
                        let couponMb = (index === specials.length - 1) ? 'mb-0' : ''; //excludes margin bottom from last coupon
                        return (
                            <div
                            className={`flex flex-col items-center justify-between w-3/4 my-6 bg-white text-gray-alt rounded-md border-2 border-dashed border-black-alt shadow-custom p-3 laptop:w-full laptop:my-7 ${couponMb}`}
                            key={index}
                            >
                                <div className="text-xl font-extrabold uppercase text-blue-primary phablet:text-2xl tablet:text-4xl">
                                    {special.title}
                                </div>
                                <div className="capitalize font-medium text-black-custom">{special.disclaimer}</div>
                            </div>
                        )
                    })
                }
            </div>
        </aside>
    )
}
export function Locations({locations, lineColor, serviceAreaBackground}) {
    locations = locations.map( ({location}) => location);

    let sortedLocations = locations.sort(function(locationA, locationB){
        return locationA.city.localeCompare(locationB.city);
    });
    return (
        <Aside className="flex flex-1 justify-start special-locations-bg" {...{serviceAreaBackground}}>
            <div className="flex-grow-1 w-full text-center text-white py-20 laptop:bg-opacity-0 laptop:flex-grow-0 laptop:w-512-5 desktop:w-720-5">
                <h2 className="text-5xl font-extrabold mb-1">Proudly Serving</h2>
                <h4 className="border-highlight text-xl mb-14 border-b-2 inline-block mx-auto">Residents in the surrounding areas</h4>
                <ul className="col-count-2 text-left text-lg tablet:col-count-3 laptop:col-count-2 laptop:ml-7">
                {
                    sortedLocations.map((location,index) => (
                        <li className="mb-3 laptop:ml-8" key={index}>
                            <LocationMarkerIcon className="inline-block h-5 w-6 mr-1"/>{location.city}
                        </li>
                    ))
                }
                </ul>
            </div>
        </Aside>
    )
}
export default function SpecialsLocations({locations, specials, serviceAreaBackground, lineColor}) {
    return (
        <section id="specials-locations" className="flex flex-wrap flex-col laptop:flex-row laptop:flex-nowrap">
            <Specials specials={specials} />
            <Locations {...{lineColor,serviceAreaBackground,locations}} />
        </section>
    );
}
