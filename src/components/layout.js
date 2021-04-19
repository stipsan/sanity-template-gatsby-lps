import React from "react"
import CalloutBar from "./calloutBar";
import Header from "./header"
import Hero from "./hero";
import Intro from "./intro";

export default function Layout({sanityData, children}){
    console.log(sanityData);
    const logoSrc = sanityData?.category?.logo?.asset?.url;
    const phone = sanityData?.category?.phone;
    const heroBackground = sanityData?.hero_banner?.asset?.url;
    const heroTitle = sanityData?.hero_title;
    const heroSubTitle = sanityData?.hero_sub_title;
    const heroContent = sanityData?.hero_content;
    const calloutMessage = sanityData?.category?.calloutMessage;
    const calloutBadge = sanityData?.category?.calloutBadge?.asset?.url;


    return (
        <>
            <Header logo={ logoSrc } phone={ phone } />
            <Hero heroBg={heroBackground} title={heroTitle} subTitle={heroSubTitle} content={heroContent} />
            <Intro />
            <CalloutBar message={calloutMessage} badgeSrc={calloutBadge} />
            { children }
        </>
    )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
