import React from 'react';
import styled from "styled-components";
import { LocationMarkerIcon } from '@heroicons/react/solid'



const Aside = styled.section`
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
`


export function Specials({specials}) {
    return (
        <aside className="flex bg-yellow-primary py-20 flex-1 justify-end">
            <div className="flex flex-col justify-evenly items-center flex-grow-1 -my-7 w-full laptop:pr-20 laptop:flex-grow-0 laptop:w-512-5 desktop:pr-24 desktop:w-720-5">
                {
                    specials.map( (special) => (
                        <div className="flex flex-col items-center justify-between w-3/4 my-7 bg-white rounded-md border-2 border-dashed border-black-custom shadow-custom p-3 laptop:w-full">
                            <div className="text-4xl font-extrabold uppercase text-blue-primary">
                                {special.title}
                            </div>
                            <div className="capitalize font-medium text-black-custom">{special.disclaimer}</div>
                        </div>
                    ))
                }
            </div>
        </aside>
    )
}
export function Locations({locations, bg}) {
    locations = locations.map( ({location}) => location);

    let sortedLocations = locations.sort(function(locationA, locationB){
        //console.log('location A: ',locationA, 'locationB: ', locationB)
        return locationA.city.localeCompare(locationB.city);
    });
    return (
        <Aside className="flex flex-1 justify-start special-locations-bg" bg={bg}>
            <div className="flex-grow-1 w-full text-center text-white py-20 bg-blue-primary laptop:bg-opacity-0 laptop:flex-grow-0 laptop:w-512-5 desktop:w-720-5">
                <h2 className="text-5xl font-extrabold mb-3">Proudly Serving</h2>
                <h4 className="text-xl mb-14 border-b-2 border-yellow-primary inline-block mx-auto">Residents in the surrounding areas</h4>
                <ul className="col-count-2 text-left">
                {
                    sortedLocations.map((location) => (
                        <li class="ml-14 mb-3"><LocationMarkerIcon class="inline-block h-5 w-6 mr-1"/>{location.city}</li>
                    ))
                }
                </ul>
            </div>
        </Aside>
    )
}
export default function SpecialsLocations({locations, specials, background}) {
    return (
        <section id="specials-locations" className="flex flex-wrap flex-col laptop:flex-row laptop:flex-nowrap">
            <Specials specials={specials} />
            <Locations locations={locations} bg={background} />
        </section>
    );
}
