//import Icon from '../icon';
export default {
  title: 'Service',
  name: 'service',
  type: 'object',
  // fieldsets: [
  //     {
  //         name: 'headerOverides', title: 'Header Overides',
  //         options: {
  //             collapsible: true, // Makes the whole fieldset collapsible
  //             collapsed: true, // Defines if the fieldset should be collapsed by default or not
  //             //columns: 2 // Defines a grid for the fields and how many columns it should have
  //         },
  //     },
  // ],
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      description: '',
    },
    // {
    //     name: 'icon',
    //     title: 'Icon',
    //     type: 'string',
    //     inputComponent: Icon,
    //     description: '',
    // },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: '',
    },
  ],
};
