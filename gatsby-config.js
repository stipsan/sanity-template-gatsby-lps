module.exports = {
  siteMetadata: {
    title: "beta",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "xjpwmgyc",
        dataset: "",
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
  ],
};
