// figure.js
export default {
    name: 'figure',
    type: 'object',
    title: 'Figure',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: { metadata: ['lqip'] },
      },
      {
        name: 'alt',
        type: 'string',
        title: 'Alternative Text',
      },
      {
        name: 'caption',
        type: 'string',
        title: 'Caption',
      },
      {
        name: 'captionUrl',
        type: 'string',
        title: 'Caption URL',
      },
      // {
      //   name: 'position',
      //   type:'boolean',
      //   title: 'Position',
      //   description: 'desc',
      //   initialValue: 'false'
      // }
    ],
  };