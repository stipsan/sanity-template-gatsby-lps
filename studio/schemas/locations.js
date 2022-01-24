import { string } from "prop-types";

export default {
    name: 'locations',
    title: 'Locations',
    type: 'document',
    fields: [
        {
            name: 'location',
            title: 'Location',
            type: 'location',
            description: '',
        },
        // {
        //     name: 'serviceAreas',
        //     title: 'Service Areas',
        //     type: 'array',
        //     of: [
        //         {
        //             type: 'reference',
        //             to: {
        //                 type: 'serviceArea'
        //             }
        //         }
        //     ]
        // }
    ],
    preview: {
        select: {
            title: 'location.city',
            // subtitle: 'details'
        },
    },
    orderings: [
        {
            title: 'City, Asc',
            name: 'cityAsc',
            by: [
                {field: 'location.city', direction: 'asc'}
            ]
        }
    ]
}