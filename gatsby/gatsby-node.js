/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path');

async function turnDataIntoPages({ graphql, actions, page }) {
    console.error('cheeeeeeese-> ', page)
    const LandingPageTemplate = path.resolve('./src/templates/LandingPage.js'); //get template for page

    const { createPage, deletePage } = actions;

    //query data
    const { data } = await graphql(`
        query AllPages {
            allSanityPage {
                edges {
                    node {
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);
    
    //loop over data and create pages
    data.allSanityPage.edges.forEach( (page) => {
        createPage({
            path: page.node.slug.current,
            component: LandingPageTemplate,
            context: {
                slug: page.node.slug.current
            }
        });
    });
}

exports.createPages = async (params) => {
    console.log('----->', params)
    //create pages dynamically
    await turnDataIntoPages(params);
}