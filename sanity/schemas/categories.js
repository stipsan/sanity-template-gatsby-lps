import { string } from "prop-types";
import { FiFolder } from 'react-icons/fi';

export default {
    name: 'category',
    title: 'Categories',
    fieldsets: [
        {name: 'meta', title: 'Meta', description: 'Category level hidden page information.'},
        {name: 'styles', title: 'Styles'},
        {name: 'callout', title: 'Callout Bar'},
        {
            name: 'serviceArea',
            title: 'Service Area',
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: false, // Defines if the fieldset should be collapsed by default or not
                columns: 2 // Defines a grid for the fields and how many columns it should have
            }
        },
        {
            name: 'testimonials',
            title: 'Testimonials',
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: false, // Defines if the fieldset should be collapsed by default or not
                columns: 1 // Defines a grid for the fields and how many columns it should have
            }
        }
      ],
    type: 'document',
    icon: FiFolder,
    fields: [
        {
            name: 'label',
            title: 'Label',
            type: 'string',
            description: 'Used for organization on the backend but not visible on site'
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
            fieldset: 'meta'
        },
        {
            name: 'phoneConversionLabel',
            title: 'Adwords Call Conversion Label',
            type: 'string',
            description: '',
            fieldset: 'meta'
        },
        {
            name: 'formConversionLabel',
            title: 'Adwords Form Conversion Label',
            type: 'string',
            description: '',
            fieldset: 'meta'
        },
        {
            name: 'chatConversionLabel',
            title: 'Adwords Chat Conversion Label',
            type: 'string',
            description: '',
            fieldset: 'meta'
        },
        {
            name: 'primaryColor',
            title: 'Primary color',
            type: 'color',
            fieldset: 'styles'
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
            description: 'When the primary & secondary color populations do not work for all element these overrides provide additional flexibility',
            fieldset: 'styles'
        },
        {
            name: 'layout',  //needs review 
            title: 'Layout',
            type: 'string', 
            fieldset: 'styles',
            options: {
                list: [
                  {title: 'Style 1', value: 'style1'},
                  {title: 'Style 2', value: 'style2'}
                ], // <-- predefined values
            }
        },
        { //dont love the placement or naming of this section?
            name: 'calloutMessage',
            title: 'Callout Message',
            description: 'desc',
            type: 'string',
            fieldset: 'callout',
        },
        { //dont love the placement or naming of this section?
            name: 'calloutBadge',
            title: 'Callout Badge',
            type: 'image',
            fieldset: 'callout',
        },
        { //dont love the placement or naming of this section?
            name: 'calloutGradient',
            title: 'Use radial Gradient?',
            description: 'Enable to override linear background gradient with radial (circular).',
            type: 'boolean',
            fieldset: 'callout',
            initialValue: false
        },
        {
            title: 'Services & Highlights',
            name: 'services',
            type: 'array', 
            of: [
                {
                    type: 'service', 
                }
            ]
        },
        {
            title: 'Specials',
            name: 'specials',
            type: 'array', 
            of: [
                {
                    type: 'reference', 
                    to: [{type: 'special'}]
                }
            ]
        },
        {
            title: 'Testimonial Section Background',
            name: 'testimonialBackground',
            type: 'image',
            fieldset: 'testimonials'
        },
        {
            title: 'Testimonials',
            name: 'testimonials',
            type: 'array',
            of: [
                {
                    type: 'reference', 
                    to: [{type: 'testimonial'}]
                }
            ],
            fieldset: 'testimonials'
        },
        {
            title: 'Service Area Background',
            name: 'serviceAreaBackground',
            type: 'image',
            fieldset: 'serviceArea'
        },
        {
            title: 'Service Area',
            name: 'serviceArea',
            type: 'reference',
            to: [{type: 'serviceArea'}],
            fieldset: 'serviceArea'
        },
        {
            title: 'Badges',
            name: 'badges',
            type: 'array',
            of: [
                {
                    type: 'reference', 
                    to: [{type: 'badge'}]
                }
            ],
        }, 
    ],
    orderings: [
        {
          title: 'Label, ASC',
          name: 'labelAsc',
          by: [
            {field: 'label', direction: 'asc'}
          ]
        }
    ],
    preview: {
        select: {
            label: 'label',
        },
        prepare: (fields) => {
            return {
                title: fields.label
            }
        }
    }
}