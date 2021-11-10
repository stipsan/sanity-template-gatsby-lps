import { string } from "prop-types";

export default {
    name: 'serviceAreas',
    title: 'Service Areas',
    type: 'document',
    fieldsets: [
        {name:'serviceAreaGroup', title: 'Service Area Group'}
    ],
    fields: [
        {
            name: 'group',
            title: 'Label',
            type: 'string',
            fieldset: 'serviceAreaGroup'
        },
        {
           name: 'locations',
           title: 'Locations',
           type: 'array',
           of: [{type: 'location'}],
           fieldset: 'serviceAreaGroup'
        }
    ]
}