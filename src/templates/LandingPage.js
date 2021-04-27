import * as React from 'react'
import { graphql } from 'gatsby'
import 'tailwindcss/tailwind.css'
import Layout from "../components/layout"

export const query = graphql`
    query GetPage ($slug: String!) {
        sanityPage(slug: {current: {eq: $slug}}) {
            id
            slug {
                current
            }
            label
            hero_banner {
                asset {
                    url
                }
            }
            hero_content
            hero_title
            hero_sub_title
            _rawIntro
            intro {
                children {
                    text
                    marks
                    _key
                    _type
                }
                _key
                _rawChildren
                _type
                list
                style
            }
            category {
                email
                label
                address
                calloutBadge {
                    asset {
                        url
                    }
                }
                calloutMessage
                chatConversionLabel
                company
                conversionId
                formConversionLabel
                layout
                logo {
                    asset {
                        url
                    }
                }
                icon {
                    asset {
                        url
                    }
                }
                phone
                phoneConversionLabel
                primaryColor {
                    hex
                }
                secondaryColor {
                    hex
                }
                tagline
                services {
                    icon {
                      asset {
                        url
                      }
                    }
                    label
                }
            }
        }
    }
`

// markup
export default function LandingPageTemplate({data}){
  //console.log('----------->', data, '<-----------');
  return (
    <Layout sanityData={data.sanityPage}>
        cheese
    </Layout>
  )
}

