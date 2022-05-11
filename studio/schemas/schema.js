// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import categories from './categories';
import companyInfo from './objects/companyInfo';
import pages from './pages';
import specials from './specials';
import testimonials from './testimonials';
import serviceArea from './serviceArea';
import locations from './locations';
import portableText from './objects/portableText';
import figure from './objects/figure';
import header from './objects/header';
import footer from './objects/footer';
import location from './objects/location';
import service from './objects/service';
import colorOverides from './objects/colorOverrides';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    header,
    footer,
    location,
    locations,
    categories,
    companyInfo,
    pages,
    specials,
    testimonials,
    serviceArea,
    service,
    colorOverides,
    portableText,
    figure,
  ]),
});
