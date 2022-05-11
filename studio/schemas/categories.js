import { string } from 'prop-types';
import { FiFolder } from 'react-icons/fi';

export default {
  name: 'category',
  title: 'Categories',
  // validation: Rule => Rule.custom(fields => {
  //   console.log(fields.companyInfo);
  //   let email = fields.companyInfo.email;
  //   if ( email?.length < 1 || Object.keys(email)?.length < 1) return "Email required for form recipient."
  //   return "Email required for form recipient."
  // }),
  fieldsets: [
    {
      name: 'meta',
      title: 'Meta',
      description: 'Category level hidden page information.',
    },
    { name: 'styles', title: 'Styles' },
    { name: 'callout', title: 'Callout Bar' },
    {
      name: 'serviceArea',
      title: 'Service Area',
      options: {
        collapsible: false, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      options: {
        collapsible: false, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  type: 'document',
  icon: FiFolder,
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description:
        'Used for organization on the backend but not visible on site',
    },
    {
      name: 'companyInfo',
      title: 'Company Info',
      type: 'companyInfo',
      description: 'Category level company information.'
    },
    {
      name: 'gtm',
      title: 'Google Tag Manager',
      type: 'string',
      description: '',
      fieldset: 'meta',
    },
    {
      name: 'conversionId',
      title: 'Adwords Conversion Id',
      type: 'string',
      description: '',
      fieldset: 'meta',
    },
    {
      name: 'phoneConversionLabel',
      title: 'Adwords Call Conversion Label',
      type: 'string',
      description: '',
      fieldset: 'meta',
    },
    {
      name: 'formConversionLabel',
      title: 'Adwords Form Conversion Label',
      type: 'string',
      description: '',
      fieldset: 'meta',
    },
    {
      name: 'chatConversionLabel',
      title: 'Adwords Chat Conversion Label',
      type: 'string',
      description: '',
      fieldset: 'meta',
    },
    {
      name: 'primaryColor',
      title: 'Primary color',
      type: 'color',
      fieldset: 'styles',
    },
    {
      name: 'secondaryColor',
      title: 'Secondary color',
      type: 'color',
      fieldset: 'styles',
    },
    {
      name: 'colorOverrides',
      title: 'Color Correction',
      type: 'colorOverrides',
      description:
        'When the primary & secondary color populations do not work for all element these overrides provide additional flexibility',
      fieldset: 'styles',
    },
    {
      name: 'layout', //needs review
      title: 'Layout',
      type: 'string',
      hidden: true,
      fieldset: 'styles',
      options: {
        list: [
          { title: 'Style 1', value: 'style1' },
          { title: 'Style 2', value: 'style2' },
        ], // <-- predefined values
      },
    },
    {
      //dont love the placement or naming of this section?
      name: 'calloutMessage',
      title: 'Callout Message',
      description: '',
      type: 'string',
      fieldset: 'callout',
    },
    {
      //dont love the placement or naming of this section?
      name: 'calloutBadge',
      title: 'Callout Badge',
      type: 'image',
      fieldset: 'callout',
    },
    {
      //dont love the placement or naming of this section?
      name: 'calloutGradient',
      title: 'Use radial Gradient?',
      description:
        'Enable to override linear background gradient with radial (circular).',
      type: 'boolean',
      fieldset: 'callout',
      initialValue: false,
    },
    {
      title: 'Services & Highlights',
      name: 'services',
      type: 'array',
      of: [
        {
          type: 'service',
        },
      ],
    },
    {
      title: 'Specials',
      name: 'specials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'special' }],
        },
      ],
    },
    {
      title: 'Testimonial Section Background',
      name: 'testimonialBackground',
      type: 'image',
      fieldset: 'testimonials',
    },
    {
      title: 'Testimonials',
      name: 'testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
      fieldset: 'testimonials',
    },
    {
      title: 'Service Area Background',
      name: 'serviceAreaBackground',
      type: 'image',
      fieldset: 'serviceArea',
    },
    {
      title: 'Service Area',
      name: 'serviceArea',
      type: 'reference',
      to: [{ type: 'serviceArea' }],
      fieldset: 'serviceArea',
    },
    {
      title: 'Badges',
      name: 'badges',
      type: 'array',
      of: [
        {
          type: 'cloudinary.asset'
        },
      ],
    },
  ],
  orderings: [
    {
      title: 'Label, ASC',
      name: 'labelAsc',
      by: [{ field: 'label', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      label: 'label',
    },
    prepare: (fields) => {
      return {
        title: fields.label,
      };
    },
  },
};
