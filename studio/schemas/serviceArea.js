import { string } from 'prop-types';

export default {
  name: 'serviceArea',
  title: 'Service Area',
  type: 'document',
  fieldsets: [{ name: 'serviceAreaGroup', title: 'Service Area Grouping' }],
  fields: [
    {
      name: 'serviceAreaLabel',
      title: 'Title',
      type: 'string',
      fieldset: 'serviceAreaGroup',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      fieldset: 'serviceAreaGroup',
    },
    {
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'locations',
          },
        },
      ],
      fieldset: 'serviceAreaGroup',
    },
  ],
  orderings: [
    {
      title: 'Label, Asc',
      name: 'labelAsc',
      by: [{ field: 'serviceAreaLabel', direction: 'asc' }],
    },
  ],
};
