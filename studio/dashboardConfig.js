export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'Netlify deploys',
        sites: [
          // {
          //   title: 'Sanity Studio',
          //   apiId: '<#<deployments.studio.providerInfo.siteId>#>',
          //   buildHookId: '<#<deployments.studio.providerInfo.buildHookId>#>',
          //   name: '<#<deployments.studio.providerInfo.siteName>#>',
          // },
          {
            title: 'Web Frontend',
            apiId: '<#<deployments.web.providerInfo.siteId>#>',
            buildHookId: '<#<deployments.web.providerInfo.buildHookId>#>',
            name: '<#<deployments.web.providerInfo.siteName>#>',
          },
        ],
      },
    },
  ],
};
