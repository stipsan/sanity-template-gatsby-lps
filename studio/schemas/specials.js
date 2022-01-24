import { string } from "prop-types";
import { FiDollarSign } from 'react-icons/fi';

export default {
    name: 'special',
    title: 'Specials',
    type: 'document',
    icon: FiDollarSign,
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
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'details'
        },
    },
    orderings: [
        {
          title: 'Title, ASC',
          name: 'titleAsc',
          by: [
            {field: 'title', direction: 'asc'}
          ]
        }
    ],
}