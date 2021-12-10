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
            excerpt: 'excerpt',
            author: 'author'
        },
        prepare: (fields) => {
            const {excerpt, author} = fields;
            return {
                title: `${excerpt}`,
                subtitle: `Author: ${author}`,
            }
        }
    },
    orderings: [
        {
          title: 'Excerpt, ASC',
          name: 'titleAsc',
          by: [
            {field: 'excerpt', direction: 'asc'}
          ]
        },
        {
            title: 'Author, ASC',
            name: 'authorAsc',
            by: [
              {field: 'author', direction: 'asc'}
            ]
          }
    ],
}