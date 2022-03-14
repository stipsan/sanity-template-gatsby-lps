export default {
  title: 'Footer',
  name: 'footer',
  type: 'object',
  fieldsets: [
    {
      name: 'footerOverides',
      title: 'Footer Overides',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  fields: [
    {
      title: 'Copyright Override',
      name: 'copyover',
      type: 'string',
      fieldset: 'footerOverides',
    },
    {
      title: 'xxxxx Override',
      name: 'xxxxxx',
      type: 'string',
      fieldset: 'footerOverides',
    },
  ],
};
