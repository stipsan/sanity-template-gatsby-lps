require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: "beta",
    siteUrl: `http://localhost`
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID || "<#< sanity.projectId >#>",
        dataset: process.env.SANITY_DATASET || "<#< sanity.dataset >#>",
        watchMode: !isProd,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',  //default but can be used to customize the name of the deployed sanity api
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -300
      }
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: ['100','200','300','400','500','600','700','800','900']
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
  ],
};
