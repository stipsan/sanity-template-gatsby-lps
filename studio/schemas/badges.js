import { FiImage } from 'react-icons/fi';

export default {
    name: 'badge',
    title: 'Badges',
    type: 'document',
    icon: FiImage,
    description: '',
    fields: [
      {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'label',
          type: 'string',
          title: 'Label',
        }
    ],
    orderings: [
      {
          title: 'Label, Asc',
          name: 'labelAsc',
          by: [
              {field: 'label', direction: 'asc'}
          ]
      }
  ]
}