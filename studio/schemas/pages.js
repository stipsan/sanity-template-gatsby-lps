import { string } from 'prop-types';
import { FiFileText } from 'react-icons/fi';

export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon: FiFileText,
  fieldsets: [
    { name: 'hero', title: 'Hero' },
    { name: 'interlude', title: 'Interlude' },
    {
      name: 'category_overrides',
      title: 'Category Overrides',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'label',
      title: 'Page Label',
      discription: '',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      hidden: 'true',
      // options: {
      //     source: doc => `${doc.label}`,
      // }
    },
    {
      name: 'hero_banner',
      title: 'Banner',
      type: 'image',
      description: 'Background image for hero section.',
      fieldset: 'hero',
    },
    {
      name: 'hero_special',
      title: 'Special',
      description: '',
      type: 'reference',
      to: [{ type: 'special' }],
      fieldset: 'hero',
    },
    // {
    //     name: 'hero_title',
    //     title: 'Title',
    //     description: '',
    //     type: 'string',
    //     fieldset: 'hero'
    // },
    // {
    //     name: 'hero_sub_title',
    //     title: 'Sub Title',
    //     description: '',
    //     type: 'string',
    //     fieldset: 'hero'
    // },
    // {
    //     name: 'hero_content',
    //     title: 'Content',
    //     description: 'Optional content for hero section.',
    //     type: 'string',
    //     fieldset: 'hero'
    // },
    {
      name: 'hero_hide_form',
      title: 'Enable to hide hero form.',
      description: '',
      type: 'boolean',
      initialValue: false,
      fieldset: 'hero',
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'portableText',
    },
    {
      name: 'interlude_text',
      title: 'Text',
      type: 'array',
      of: [{ type: 'text' }],
      fieldset: 'interlude',
    },
    {
      name: 'interlude_image',
      title: 'Image',
      type: 'image',
      fieldset: 'interlude',
    },
    {
      name: 'company_overrides',
      title: 'Company Overrides',
      type: 'companyInfo',
      description: '',
      fieldset: 'category_overrides',
    },
    {
      name: 'testimonials_override',
      title: 'Testimonial Overrides',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
      fieldset: 'category_overrides',
    },
    {
      title: 'Specials',
      name: 'specials_override',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'special' }],
        },
      ],
      fieldset: 'category_overrides',
    },
    {
      name: 'service_area_override',
      title: 'Service Area Override',
      type: 'reference',
      to: [{ type: 'serviceArea' }],
      fieldset: 'category_overrides',
    },
  ],
  preview: {
    select: {
      category: 'category.label',
      label: 'label',
      slug: 'slug',
    },
    prepare: (fields) => {
      return {
        title: `${fields.label}`,
        subtitle: `Category: ${fields.category}`,
      };
    },
  },
  orderings: [
    {
      title: 'Label, Asc',
      name: 'labelAsc',
      by: [{ field: 'label', direction: 'asc' }],
    },
  ],
};
