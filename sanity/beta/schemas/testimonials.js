import { string } from "prop-types";

export default {
    name: 'testimonial',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'excerpt',
            title: 'Quote Excerpt',
            type: 'text',
            description: '',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
            description: '',
        },
    ],
    preview: {
        select: {
          title: 'author',
          subtitle: 'excerpt'
        }
    }
}