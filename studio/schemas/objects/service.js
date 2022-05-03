import React from 'react';
import Icon from '../../components/icon';
import bust from '../../utils/bust';
import loadStyle from '../../utils/loadStyle';
const icomoonPath = 'https://d1azc1qln24ryf.cloudfront.net/198172/ryno-lp-factory';

//promise loads icomoon stylesheet for select option preview
loadStyle(bust(`${icomoonPath}/style-cf.css`), 'icomoon');

export default {
  title: 'Service',
  name: 'service',
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
      name: 'icon',
      title: 'Icon',
      type: 'string',
      inputComponent: Icon,
      description: '',
      icomoonPath: icomoonPath,
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: '',
    },
  ],
  preview: {
    select: {
      label: 'label',
      icon: 'icon'
    },
    prepare({ icon, label }) {
      return {
        title: label,
        media: <i className={`icon-${icon}`}></i>
      }
    }
  }
};
