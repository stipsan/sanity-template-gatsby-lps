import { string } from "prop-types";

export default {
    name: 'specials',
    title: 'Specials',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: '',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'text',
            description: '',
        },
        {
            name: 'disclaimer',
            title: 'Disclaimer',
            type: 'string',
            description: '',
        },
    ]
}