require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});
const clientConfig = require("./client-config");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: "beta",
    siteUrl: `http://localhost`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        watchMode: !isProd,
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default", //default but can be used to customize the name of the deployed sanity api
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -300,
      },
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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: [
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "700",
                "800",
                "900",
              ],
              //subsets: ['latin']
              //text: 'Hello'
              //fontDisplay: 'swap',
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
          ],
        },
        // formatAgents: {
        //   eot: `Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)`,
        //   ttf: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8`,
        //   woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
        //   woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
        // },
        //formats: ['woff2', 'woff'],
        //useMinify: true,
        //usePreload: true,
        //usePreconnect: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Poppins`,
    //         variants: ['100','200','300','400','500','600','700','800','900']
    //       },
    //     ],
    //   },
    // },
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
