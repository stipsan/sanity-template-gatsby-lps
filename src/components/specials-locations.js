import React from 'react';

export function Specials() {
    return (
        <aside id="specials" class="flex-1 py-10 bg-yellow-primary laptop:bg-none">
            <div class="mx-auto w-3/4 mb-10 bg-white rounded-lg border-2 border-dashed border-black-custom shadow-custom p-3 tablet:mr-20">
                <div class="px-5 text-4xl font-extrabold uppercase text-blue-primary">
                $50 Off Service Call
                </div>
            </div>
            <div class="mx-auto w-3/4 mb-10 bg-white rounded-lg mr-20 border-2 border-dashed border-black-custom shadow-custom p-3 relative">
                <div class="text-4xl font-extrabold uppercase text-blue-primary">
                $120 Diagnostics
                </div>
                <div class="capitalize font-medium text-black-custom absolute bottom-0">Call 888-888-8888 to redeem this offer!</div>
            </div>
        </aside>
    )
}

export function Locations({locations}) {
    return (
        <aside id="locations" class="flex-1 text-center text-white py-20 bg-blue-primary laptop:bg-opacity-0">
            <h2 class="text-5xl font-extrabold mb-3">Proudly Serving</h2>
            <h4 class="text-xl mb-14 border-b-2 border-yellow-primary inline-block mx-auto">Residents in the surrounding areas</h4>
            <ul class="grid grid-cols-3">
                {locations.map(({ location }) => (
                    <li>{location.city}</li>
                ))}
            </ul>
        </aside>
    )
}
export default function SpecialsLocations({locations}) {
    return (
        <section id="specials-locations" class="special-locations-bg">
            <div class="mx-auto flex flex-col laptop:container laptop:flex-row">
                <Specials />
                <Locations locations={locations}/>
            </div>
        </section>
    );
}
