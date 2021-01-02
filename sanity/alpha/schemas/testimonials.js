import { string } from "prop-types";

export default {
    name: 'testimonial',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'quote',
            title: 'Quote',
            type: 'text',
            description: '',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
            description: '',
        },
    ]
}