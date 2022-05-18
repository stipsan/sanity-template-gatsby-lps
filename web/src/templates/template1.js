import * as React from 'react';
import { graphql } from 'gatsby';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';

export const query = graphql`
  query GetPage($slug: String!) {
    sanityPage(slug: { current: { eq: $slug } }) {
      id
      slug {
        current
      }
      label
      hero_banner {
        secure_url
      }
      hero_special {
        title
        details
        disclaimer
      }
      hero_hide_form
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
      intro_image {
        secure_url
      }
      interlude_text
      interlude_image {
        secure_url
      }
      category {
        companyInfo {
          logo {
            secure_url
          }
          icon {
            secure_url
          }
          company
          phone
          email
          hasClr
          address
          tagline
        }
        label
        calloutBadge {
          secure_url
        }
        calloutMessage
        calloutGradient
        chatConversionLabel
        conversionId
        formConversionLabel
        layout
        phoneConversionLabel
        primaryColor {
          hex
        }
        secondaryColor {
          hex
        }
        colorOverrides {
          primaryBtnColor {
            hex
          }
          secondaryBtnColor {
            hex
          }
          formBgColor {
            hex
          }
          gradientStartColor {
            hex
          }
          gradientEndColor {
            hex
          }
          reviewBgColor {
            hex
          }
          reviewBubbleColor {
            hex
          }
          specialsBgColor {
            hex
          }
          lineColor {
            hex
          }
          headingTextColor {
            hex
          }
        }
        services {
          icon
          label
        }
        testimonials {
          author
          excerpt
        }
        testimonialBackground {
          secure_url
        }
        serviceArea {
          locations {
            location {
              city
            }
          }
        }
        serviceAreaBackground {
          secure_url
        }
        specials {
          title
          disclaimer
          details
        }
        badges {
          secure_url
        }
        gtm
        conversionId
        phoneConversionLabel
        formConversionLabel
        chatConversionLabel
      }
      company_overrides {
        company
        phone
        email
        address
        tagline
        logo {
          secure_url
        }
        icon {
          secure_url
        }
      }
      testimonials_override {
        author
        excerpt
      }
      specials_override {
        title
        disclaimer
        details
      }
      service_area_override {
        locations {
          location {
            city
          }
        }
      }
    }
  }
`;

export default function LandingPageTemplate({ data }) {
  return <Layout sanityData={data.sanityPage}></Layout>;
}
