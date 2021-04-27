import React from "react"
import CalloutBar from "./calloutBar";
import Header from "./header"
import Hero from "./hero";
import Intro from "./intro";
import Services from "./services";
import Testimonials from "./testimonials";
import testimonials from "./testimonials";

export default function Layout({sanityData, children}){
    console.log('Sanity Data',sanityData);
    const logoSrc = sanityData?.category?.logo?.asset?.url;
    const iconSrc = sanityData?.category?.icon?.asset?.url;
    const phone = sanityData?.category?.phone;
    const heroBackground = sanityData?.hero_banner?.asset?.url;
    const heroTitle = sanityData?.hero_title;
    const heroSubTitle = sanityData?.hero_sub_title;
    const heroContent = sanityData?.hero_content;
    const calloutMessage = sanityData?.category?.calloutMessage;
    const calloutBadge = sanityData?.category?.calloutBadge?.asset?.url;
    const intro = sanityData?._rawIntro;
    const services = sanityData?.category?.services;
    const primaryColor = sanityData?.category?.primaryColor?.hex;

    return (
        <>
            <Header logo={ logoSrc } phone={ phone } />
            <Hero heroBg={heroBackground} title={heroTitle} subTitle={heroSubTitle} content={heroContent} />
            <Intro intro={intro} />
            <CalloutBar message={calloutMessage} badgeSrc={calloutBadge} />
            <Services services={services} color={primaryColor} icon={iconSrc} />
            <Testimonials color={primaryColor} />
            { children }
        </>
    )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
