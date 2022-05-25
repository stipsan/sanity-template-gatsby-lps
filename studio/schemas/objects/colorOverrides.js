export default {
  title: 'Color Correction',
  name: 'colorOverrides',
  type: 'object',
  fieldsets: [
    {
      name: 'colorOverrides',
      title: 'Overrides',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  fields: [
    {
      name: 'primaryBtnColor',
      title: 'Primary Button Color Override',
      type: 'color',
      fieldset: 'colorOverrides',
    },
    {
      name: 'secondaryBtnColor',
      title: 'Secondary Button Color Override',
      type: 'color',
      fieldset: 'colorOverrides',
    },
    {
      name: 'formBgColor',
      title: 'Form Background Color Override',
      type: 'color',
      fieldset: 'colorOverrides',
    },
    {
      name: 'lineColor',
      title: 'Ornament & Underline Color Override',
      type: 'color',
      fieldset: 'colorOverrides',
    },
    {
      name: 'iconColor',
      title: 'Icon Color Override',
      type: 'color',
      fieldset: 'colorOverrides'
    },
    {
      name: 'gradientStartColor',
      title: 'Gradient Color Start Override',
      type: 'color',
      fieldset: 'colorOverrides',
    },
    {
      name: 'gradientEndColor',
      title: 'Gradient Color End Override',
      type: 'color',
      fieldset: 'colorOverrides',
    },
    {
      name: 'reviewBgColor',
      title: 'Review Section Background Color Override',
      type: 'color',
      fieldset: 'colorOverrides',
    },
    {
      name: 'reviewBubbleColor',
      title: 'Review Bubble Color Override',
      type: 'color',
      fieldset: 'colorOverrides',
    },
    {
      name: 'specialsBgColor',
      title: 'Specials Section Background Color Override',
      type: 'color',
      fieldset: 'colorOverrides',
    },
    {
      name: 'headingTextColor',
      title: 'Heading Titles Color Override',
      type: 'color',
      fieldset: 'colorOverrides',
    },
  ],
};
