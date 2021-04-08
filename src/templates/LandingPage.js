import * as React from 'react'
import { graphql } from 'gatsby'
import 'tailwindcss/tailwind.css'
import Layout from "../components/layout"
import Header from '../components/header';

export const query = graphql`
    query GetPage ($slug: String!) {
        sanityPage(slug: {current: {eq: $slug}}) {
            id
            slug {
                current
            }
            label
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
                phone
                phoneConversionLabel
                primaryColor {
                    hex
                }
                secondaryColor {
                    hex
                }
                tagline
            }
        }
    }
`

// markup
const landingPageTemplate = ({data}) => {
  //console.log('----------->', data, '<-----------');
  return (
    <Layout sanityData={data.sanityPage}>
        cheese
    </Layout>
  )
}

export default landingPageTemplate

