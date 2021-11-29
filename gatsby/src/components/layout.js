import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from 'styled-components'
import Badges from "./badges";
import CalloutBar from "./calloutBar";
import Contact from "./contact";
import Header from "./header"
import Hero from "./hero";
import Interlude from "./interlude";
import Intro from "./intro";
import Services from "./services";
import SpecialsLocations from "./specials-locations";
import Tagline from "./tagline";
import Testimonials from "./testimonials";
import Footer from "./footer";
import lightenDarkenColor from "../utils/lightenDarkenColor";
import getContrastingColor from '../utils/getContrastingColor'

const GlobalStyle = createGlobalStyle`
    .bg--primary {
        background-color: ${({primaryColor}) => primaryColor};
        color: ${({primaryColor}) => getContrastingColor(primaryColor)};
    }
    .bg--secondary {
        background-color: ${({secondaryColor}) => secondaryColor}; 
        color: ${({secondaryColor}) => getContrastingColor(secondaryColor)};
    }
    .bg--form {
        background-color: ${({formBgColor}) => formBgColor};
        color: ${({formBgColor}) => getContrastingColor(formBgColor)};
    }
    .bg--callout {
        background: radial-gradient(circle at center,${({calloutBarBgColor}) => lightenDarkenColor(calloutBarBgColor, 60)}, ${({calloutBarBgColor}) => calloutBarBgColor});
        color: ${({calloutBarBgColor}) => getContrastingColor(calloutBarBgColor)};
    }
    .bg--reviews {
        background-color: ${({reviewBgColor}) => reviewBgColor};
        color: ${({reviewBgColor}) => getContrastingColor(reviewBgColor)};
        &-bubble {
            background-color: ${({reviewBubbleColor}) => reviewBubbleColor};
            color: ${({reviewBubbleColor}) => getContrastingColor(reviewBubbleColor)};
            &:after {
                border-top: 30px solid ${({reviewBubbleColor}) => reviewBubbleColor};
            }
        }
    }
    .bg--specials {
        background-color: ${({specialsBgColor}) => specialsBgColor}; 
    }
    .button--primary {
        background-color: ${({primaryBtnColor}) => primaryBtnColor};
        color: ${({primaryBtnColor}) => getContrastingColor(primaryBtnColor)};
        &:hover {
            background-color: ${({primaryBtnColor}) => lightenDarkenColor(primaryBtnColor,20)}; 
        }
    }
    .button--secondary {
        background-color: ${({secondaryBtnColor}) => secondaryBtnColor}; 
        color: ${({secondaryBtnColor}) => getContrastingColor(secondaryBtnColor)};
        &:hover {
            background-color: ${({secondaryBtnColor}) => lightenDarkenColor(secondaryBtnColor,20)}; 
        }
    }
    .border-highlight, .border-highlight:after, .border-highlight:before {
        border-color: ${({lineColor}) => lineColor};
    }
    .text--secondary {
        color: ${({headingTextColor}) => headingTextColor};
    }
`

export default function Layout({sanityData, children}){
    //overwriteable per page
    const address = sanityData?.company_overrides?.address || sanityData?.category?.companyInfo?.address;
    const company = sanityData?.company_overrides?.company || sanityData?.category?.companyInfo?.company;
    const phone = sanityData?.company_overrides?.phone || sanityData?.category?.companyInfo?.phone;
    const emailRecipient = sanityData?.company_overrides?.email || sanityData?.category?.companyInfo?.email;
    const logoSrc = sanityData?.company_overrides?.logo?.asset?.url || sanityData?.category?.companyInfo?.logo?.asset?.url;
    const iconSrc = sanityData?.company_overrides?.icon?.asset?.url || sanityData?.category?.companyInfo?.icon?.asset?.url;
    const tagline = sanityData?.company_overrides?.tagline || sanityData?.category?.companyInfo?.tagline;
    const testimonials = sanityData?.testimonials_override || sanityData?.category?.testimonials;
    const specials = sanityData?.specials_override || sanityData?.category?.specials;
    const locations = sanityData?.service_area_override?.locations || sanityData?.category?.serviceArea?.locations;
    const gtmId = sanityData?.category?.gtm;
    //Not overwriteable per page
    const conversionId = sanityData?.category?.conversionId;
    const phoneConversionLabel = sanityData?.category?.phoneConversionLabel;
    const formConversionLabel = sanityData?.category?.formConversionLabel;
    const chatConversionLabel = sanityData?.category?.chatConversionLabel;
    const heroBackground = sanityData?.hero_banner?.asset?.url;
    const heroTitle = sanityData?.hero_title;
    const heroSubTitle = sanityData?.hero_sub_title;
    const heroContent = sanityData?.hero_content;
    const calloutMessage = sanityData?.category?.calloutMessage;
    const calloutBadge = sanityData?.category?.calloutBadge?.asset?.url;
    const introText = sanityData?._rawIntro;
    const services = sanityData?.category?.services;
    const testimonialBackground =sanityData?.category?.testimonialBackground?.asset?.url;
    const interludeText = sanityData?.interlude_text;
    const interludeImageSrc = sanityData?.interlude_image?.asset?.url;
    const serviceAreaBackground = sanityData?.category?.serviceAreaBackground?.asset?.url;
    const badgeObjs = sanityData?.category?.badges;
    //colors
    const primaryColor = sanityData?.category?.primaryColor?.hex;
    const secondaryColor = sanityData?.category?.secondaryColor?.hex;
    const primaryBtnColor = sanityData?.category?.colorOverrides?.primaryBtnColor?.hex || primaryColor;
    const secondaryBtnColor = sanityData?.category?.colorOverrides?.secondaryBtnColor?.hex || secondaryColor;
    const formBgColor = sanityData?.category?.colorOverrides?.formBgColor?.hex || secondaryColor;
    const lineColor = sanityData?.category?.colorOverrides?.lineColor?.hex || primaryColor;
    const calloutBarBgColor = sanityData?.category?.colorOverrides?.calloutBarBgColor?.hex || secondaryColor;
    const reviewBgColor = sanityData?.category?.colorOverrides?.reviewBgColor?.hex || secondaryColor;
    const reviewBubbleColor = sanityData?.category?.colorOverrides?.reviewBubbleColor?.hex || primaryColor;
    const specialsBgColor = sanityData?.category?.colorOverrides?.specialsBgColor?.hex || primaryColor;
    const headingTextColor = sanityData?.category?.colorOverrides?.headingTextColor?.hex || secondaryColor;

    return (
        <>
            <GlobalStyle {
                ...{
                    primaryBtnColor,
                    secondaryBtnColor,
                    lineColor,
                    headingTextColor,
                    primaryColor,
                    secondaryColor,
                    formBgColor,
                    calloutBarBgColor,
                    reviewBgColor,
                    reviewBubbleColor,
                    specialsBgColor
                }
            }/>
            <Helmet>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                            'formSubmitted': false,
                            'formattedPhone': '${phone}',
                            'phoneConversionId': '${conversionId}',
                            'phoneConversionLabel': '${phoneConversionLabel}',
                            'formConversionId': '${conversionId}',
                            'formConversionLabel': '${formConversionLabel}',
                            'chatConversionLabel': '${chatConversionLabel}'
                        });

                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','${gtmId}');
                    `}
                </script>
            </Helmet>
            <Header {...{logoSrc,phone}} />
            <Hero {...{heroBackground, formBgColor, heroTitle, heroSubTitle, emailRecipient, heroContent}} />
            <Intro {...{introText}} />
            <CalloutBar {...{calloutMessage,calloutBadge }} />
            <Services {...{lineColor, services,iconSrc}} />
            <Testimonials {...{testimonialBackground, reviewBgColor, reviewBubbleColor, testimonials, lineColor}} />
            <Interlude {...{interludeText, interludeImageSrc}} />
            <SpecialsLocations {...{locations, specials, serviceAreaBackground, specialsBgColor, lineColor}} />
            <Contact email={emailRecipient} />
            <Tagline {...{tagline,lineColor,iconSrc}} />
            <Badges badges={badgeObjs} />
            <Footer {...{company,address,phone}} />
            { children }
        </>
    )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
