import { string } from "prop-types";

export default {
    name: 'category',
    title: 'Categories',
    fieldsets: [
        {name: 'companyInfo', title: 'Company Info'},
        {name: 'meta', title: 'Meta'},
        {name: 'styles', title: 'Styles'},
        {name: 'callout', title: 'Callout Bar'},
      ],
    type: 'document',
    fields: [
        {
            name: 'label',
            title: 'Label',
            type: 'string',
            description: 'Used for organization on the backend but not visible on site'
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            description: '',
            fieldset: 'companyInfo'
        },
        {
            name: 'company',
            title: 'Business Name',
            type: 'string',
            description: '',
            fieldset: 'companyInfo',
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            description: '',
            fieldset: 'companyInfo',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            description: 'Contact Form Recipient',
            fieldset: 'companyInfo',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
            description: '',
            fieldset: 'companyInfo',
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            description: '',
            fieldset: 'companyInfo',
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
            type: 'string',
            fieldset: 'callout',
        },
        { //dont love the placement or naming of this section?
            name: 'calloutBadge',
            title: 'Callout Badge',
            type: 'image',
            fieldset: 'callout',
        },
        {
            title: 'Specials',
            name: 'specials',
            type: 'array', 
            of: [
                {
                    type: 'reference', 
                    to: [{type: 'specials'}]
                }
            ]
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
            ]
        },
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