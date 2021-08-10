import dotenv from 'dotenv';
dotenv.config({ path: '.env'})

export default {
    siteMetadata: {
        title: `The site title`,
        description: `The site description`,
        siteUrl: `https://samplesite.com`
    },
    plugins: [
        'gatsby-plugin-styled-components',
        {
            // this is the name of the plugin you are adding
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'iaglqa5o', 
                dataset: 'production', 
                watchMode: true,
                token: process.env.token
            }
        }
    ]
}