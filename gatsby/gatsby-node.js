/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path');

async function turnDataIntoPages({ graphql, actions }) {
    //const { createPage, deletePage } = actions;
    
    //query data
    const { data } = await graphql(`
        query AllPages {
            allSanityPage {
                edges {
                    node {
                        slug {
                            current
                        }
                        label
                        category {
                            label
                            layout
                        }
                    }
                }
            }
        }
    `);

    //loop over data and create pages
    data.allSanityPage.edges.forEach( (page) => {
        let LandingPageTemplate;
        let layout = page.node.category.layout;
        let slug = page.node.slug.current;
        let category = page.node.category.label;
        if(layout === 'style1'){
            LandingPageTemplate = path.resolve('./src/templates/LandingPage.js'); //can update for dynamic templates based on graphql response   
        } else {
            LandingPageTemplate = path.resolve('./src/templates/LandingPage.js'); //get template for page    
        }
        
    
        actions.createPage({
            path: `${slug}`,
            component: LandingPageTemplate,
            context: {
                slug: slug
            }
        });
    });
}

exports.createPages = async (params) => {
    //create pages dynamically
    await turnDataIntoPages(params);
}