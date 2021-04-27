require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: "beta",
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
      resolve: "gatsby-plugin-postcss",
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
  ],
};
