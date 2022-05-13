import { string } from 'prop-types';

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
      by: [{ field: 'location.city', direction: 'asc' }],
    },
  ],
};
