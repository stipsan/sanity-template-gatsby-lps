import { string } from 'prop-types';
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
      validation: Rule => Rule.max(20).warning('Beware of potential line wrap, consider using details.')
    },
    {
      name: 'details',
      title: 'Details',
      type: 'text',
      description: '',
    },
    {
      name: 'disclaimer',
      title: 'Disclaimer (optional)',
      type: 'string',
      description: '',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'details',
    },
  },
  orderings: [
    {
      title: 'Title, ASC',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
};
