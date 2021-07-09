import React from "react";
import { Helmet } from "react-helmet";
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
    const intro = sanityData?._rawIntro;
    const services = sanityData?.category?.services;
    const primaryColor = sanityData?.category?.primaryColor?.hex;
    const testimonials = sanityData?.category?.testimonials;
    const interludeText = sanityData?.interlude_text;
    const interludeImageSrc = sanityData?.interlude_image?.asset?.url;
    const serviceAreaBackground =sanityData?.category?.serviceAreaBackground?.asset?.url;
    const specials = sanityData?.category?.specials;
    const badgeObjs = sanityData?.category?.badges;

    return (
        <>
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
            <Header logo={logoSrc} phone={phone} />
            <Hero heroBg={heroBackground} title={heroTitle} subTitle={heroSubTitle} content={heroContent} email={emailRecipient} />
            <Intro intro={intro} />
            <CalloutBar message={calloutMessage} badgeSrc={calloutBadge} />
            <Services services={services} color={primaryColor} icon={iconSrc} />
            <Testimonials color={primaryColor} testimonials={testimonials} />
            <Interlude text={interludeText} image={interludeImageSrc} />
            <SpecialsLocations locations={locations} specials={specials} background={serviceAreaBackground} />
            <Contact email={emailRecipient} />
            <Tagline tagline={tagline} color={primaryColor} icon={iconSrc} />
            <Badges badges={badgeObjs} />
            <Footer company={company} address={address} phone={phone} />
            { children }
        </>
    )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
