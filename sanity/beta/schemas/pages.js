import { string } from "prop-types";

export default {
    name: 'page',
    title: 'Pages',
    type: 'document',
    fieldsets: [
        {name: 'hero', title: 'Hero'},
        {name: 'interlude', title: 'Interlude'},
      ],
    fields: [
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: {type: 'category'}
        },
        {
            name: 'label',
            title: 'Page Label',
            discription: '',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: doc => `${doc.label}`
            }
        },
        {
            name: 'hero_banner',
            title: 'Banner',
            type: 'image',
            description: 'Background image for hero section.',
            fieldset: 'hero'
        },
        {
            name: 'hero_title',
            title: 'Title',
            description: '',
            type: 'string',
            fieldset: 'hero'
        },
        {
            name: 'hero_content',
            title: 'Content',
            description: 'Optional content for hero section.',
            type: 'string',
            fieldset: 'hero'
        },
        {
            name: 'interlude_text',
            title: 'Text',
            type: 'string',
            fieldset: 'interlude' 
        },
        {
            name: 'interlude_image',
            title: 'Image',
            type: 'image',
            fieldset: 'interlude' 
        },
        {
            name: 'customization',
            title: 'Customization',
            type: 'array',
            description: '',
            of: [{type:'header'}, {type:'footer'}]
        },
    ],
    preview: {
        select: {
            title: 'label',
            subtitle: 'slug',
        }
    }
}
