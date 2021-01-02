import { string } from "prop-types";

export default {
    name: 'category',
    title: 'Categories',
    fieldsets: [
        {name: 'adwords', title: 'Adwords Tracking Codes'}
      ],
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            description: '',
        },
        {
            name: 'company',
            title: 'Company Name',
            type: 'string',
            description: ''
        },
        {
            name: 'slogan',
            title: 'Company Slogan',
            type: 'string',
            description: ''
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            description: ''
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            description: ''
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
            description: ''
        },
        {
            name: 'gtm',
            title: 'Google Tag Manager',
            type: 'string',
            description: ''
        },
        {
            name: 'conversionId',
            title: 'Adwords Conversion Id',
            type: 'string',
            description: '',
            fieldset: 'adwords'
        },
        {
            name: 'phoneConversionLabel',
            title: 'Adwords Call Conversion Label',
            type: 'string',
            description: '',
            fieldset: 'adwords'
        },
        {
            name: 'formConversionLabel',
            title: 'Adwords Form Conversion Label',
            type: 'string',
            description: '',
            fieldset: 'adwords'
        },
        {
            name: 'chatConversionLabel',
            title: 'Adwords Chat Conversion Label',
            type: 'string',
            description: '',
            fieldset: 'adwords'
        },
        {
            name: 'primaryColor',
            title: 'Primary color',
            type: 'color'
        },
        {
            name: 'secondaryColor',
            title: 'Secondary color',
            type: 'color'
        }
    ]
}