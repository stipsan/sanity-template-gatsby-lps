export default {
    title: 'Header',
    name: 'header',
    type: 'object',
    fieldsets: [
        {
            name: 'headerOverides', title: 'Header Overides',
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: true, // Defines if the fieldset should be collapsed by default or not
                columns: 1 // Defines a grid for the fields and how many columns it should have
            },
        },
    ],
    fields: [
        {
            title: 'Category Logo Override',
            name: 'logo',
            type: 'image',
            fieldset: 'headerOverides',
        },
        {
            title: 'Category Phone Override',
            name: 'cheesePhone',
            type: 'string',
            fieldset: 'headerOverides',
        },
        {
            title: 'Category xxxxx Override',
            name: 'xxxxxx',
            type: 'string',
            fieldset: 'headerOverides',
        },
    ],
}