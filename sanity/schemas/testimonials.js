import { string } from "prop-types";
import { FiFeather } from 'react-icons/fi';

export default {
    name: 'testimonial',
    title: 'Testimonials',
    type: 'document',
    icon: FiFeather,
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