export default {
    title: 'Location',
    name: 'location',
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
            name: 'city',
            title: 'City',
            type: 'string',
            description: '',
        },
        {
            name: 'county',
            title: 'County (optional)',
            type: 'string',
            description: '',
        },
        {
            name: 'state',
            title: 'State (optional)',
            type: 'string', 
        }
    ],
}
