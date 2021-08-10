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

export default function Layout({sanityData, children}){
    console.log('Sanity Data',sanityData);
    //overwriteable
    const address = sanityData?.company_overrides?.address || sanityData?.category?.companyInfo?.address;
    const company = sanityData?.company_overrides?.company || sanityData?.category?.companyInfo?.company;
    const phone = sanityData?.company_overrides?.phone || sanityData?.category?.companyInfo?.phone;
    const emailRecipient = sanityData?.company_overrides?.email || sanityData?.category?.email;
    const logoSrc = sanityData?.company_overrides?.logo?.asset?.url || sanityData?.category?.companyInfo?.logo?.asset?.url;
    const iconSrc = sanityData?.company_overrides?.icon?.asset?.url || sanityData?.category?.companyInfo?.icon?.asset?.url;
    const tagline = sanityData?.company_overrides?.tagline || sanityData?.category?.tagline;
    const locations = sanityData?.service_area_overrides?.locations || sanityData?.category?.serviceArea?.locations;
    const gtmId = sanityData?.category?.gtm;
    //colors
    const primaryColor = sanityData?.category?.primaryColor?.hex;
    const secondaryColor = sanityData?.category?.secondaryColor?.hex;
    const primaryBtnColor = primaryColor;
    const secondaryBtnColor = secondaryColor;
    const formBgColor = secondaryColor;
    const lineColor = primaryColor;
    const reviewBgColor = secondaryColor;
    const reviewBubbleColor = primaryColor;
    const specialsBgColor = primaryColor;
    const headingTextColor = secondaryColor;

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
    const testimonials = sanityData?.category?.testimonials;
    const interludeText = sanityData?.interlude_text;
    const interludeImageSrc = sanityData?.interlude_image?.asset?.url;
    const serviceAreaBackground =sanityData?.category?.serviceAreaBackground?.asset?.url;
    const specials = sanityData?.category?.specials;
    const badgeObjs = sanityData?.category?.badges;

    const GlobalStyle = createGlobalStyle`
        .bg--primary {
            background-color: ${({primaryBtnColor, primaryColor}) => (primaryBtnColor ? primaryBtnColor : primaryColor)};
        }
        .bg--secondary {
            background-color: ${({secondaryBtnColor, secondaryColor}) => (secondaryBtnColor ? secondaryBtnColor : secondaryColor)}; 
        }
        .bg--form {
            background-color: ${({formBgColor,primaryColor}) => (formBgColor ? formBgColor : primaryColor)};  
        }
        .text--secondary {
            color: ${({headingTextColor,secondaryColor}) => (headingTextColor ? headingTextColor : secondaryColor)};
        }
        .bb--primary {
            border-bottom-color: ${({lineColor,primaryColor}) => (lineColor ? lineColor : primaryColor)}
        }
    `

    return (
        <>
            <GlobalStyle {...{primaryBtnColor,secondaryBtnColor,lineColor,headingTextColor,primaryColor,secondaryColor,formBgColor}} />
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
