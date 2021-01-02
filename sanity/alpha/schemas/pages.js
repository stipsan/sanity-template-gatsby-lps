import { string } from "prop-types";

export default {
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
        {
            name: 'banner',
            title: 'Banner',
            type: 'image',
            description: '',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: '',
        },
        {
            title: 'Text',
            name: 'text',
            type: 'array', 
            of: [{type: 'block'}]
        }
    ]
}