import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
        ...S.documentTypeListItems(),
        S.divider(),
        S.listItem()
            .title('Areas We Serve')
            .child(
                S.list()
                    .title('Areas We Serve')
                    .items([
                        S.documentTypeListItem('locations').title('Individual Locations'),
                        S.documentTypeListItem('serviceArea').title('Service Areas'),
                    ])
            )
    ])
