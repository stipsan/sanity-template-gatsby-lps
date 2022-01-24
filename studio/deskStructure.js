import S from '@sanity/desk-tool/structure-builder'
import { FiGlobe, FiMapPin, FiMap } from 'react-icons/fi';

const hiddenDocTypes = (listItem) => {
  return !['serviceArea', 'locations'].includes(listItem.getId());
}

export default () =>
  S.list()
    .title('Content')
    .items([
        ...S.documentTypeListItems().filter(hiddenDocTypes),
        S.divider(),
        S.listItem()
            .title('Areas We Serve')
            .icon(FiGlobe)
            .child(
                S.list()
                    .title('Areas We Serve')
                    .items([
                        S.documentTypeListItem('locations').title('Individual Locations').icon(FiMapPin),
                        S.documentTypeListItem('serviceArea').title('Service Areas').icon(FiMap),
                    ])
            )
    ])
