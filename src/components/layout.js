import React from "react"
import CalloutBar from "./calloutBar";
import Contact from "./contact";
import Header from "./header"
import Hero from "./hero";
import Interlude from "./interlude";
import Intro from "./intro";
import Services from "./services";
import SpecialsLocations from "./specials-locations";
import Testimonials from "./testimonials";


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
    const testimonials = sanityData?.category?.testimonials;
    const interludeText = sanityData?.interlude_text;
    const interludeImageSrc = sanityData?.interlude_image?.asset?.url;
    const locations = sanityData?.category?.serviceArea?.locations;
    const serviceAreaBackground =sanityData?.category?.serviceAreaBackground?.asset?.url;
    const specials = sanityData?.category?.specials;
    const emailRecipient = sanityData?.category?.email;

    return (
        <>
            <Header logo={ logoSrc } phone={ phone } />
            <Hero heroBg={heroBackground} title={heroTitle} subTitle={heroSubTitle} content={heroContent} />
            <Intro intro={intro} />
            <CalloutBar message={calloutMessage} badgeSrc={calloutBadge} />
            <Services services={services} color={primaryColor} icon={iconSrc} />
            <Testimonials color={primaryColor} testimonials={testimonials}/>
            <Interlude text={interludeText} image={interludeImageSrc} />
            <SpecialsLocations locations={locations} specials={specials} background={serviceAreaBackground} />
            <Contact recipient={emailRecipient} />
            { children }
        </>
    )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
