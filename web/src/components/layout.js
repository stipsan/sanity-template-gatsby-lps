import React from 'react';
import { Helmet } from 'react-helmet';
import Badges from './badges';
import CalloutBar from './calloutBar';
import Contact from './contact';
import Header from './header';
import Hero from './hero';
import Interlude from './interlude';
import Intro from './intro';
import Services from './services';
import Tagline from './tagline';
import Testimonials from './testimonials';
import Footer from './footer';
import SidebarForm from './forms/sidebar-form';

//temp
import Split from './layout/split';
import Left from './layout/left';
import Right from './layout/right';
import FullwidthForm from './forms/fullwidth-form';
import Locations from './locations';
import Specials from './specials';
//end temp

import GlobalStyle from '../styles/globalStyles';

function pluckOverride(pageData, categoryData) {
  if (Array.isArray(pageData)) {
    if (!pageData.length) {
      return categoryData;
    } else {
      return pageData;
    }
  }
  if (!pageData || pageData.length === 0) {
    return pageData;
  } else {
    return categoryData;
  }
}

export default function Layout({ sanityData, children }) {
  //overwriteable per page
  const address =
    sanityData?.company_overrides?.address ||
    sanityData?.category?.companyInfo?.address;
  const company =
    sanityData?.company_overrides?.company ||
    sanityData?.category?.companyInfo?.company;
  const phone =
    sanityData?.company_overrides?.phone ||
    sanityData?.category?.companyInfo?.phone;
  const emailRecipients =
    sanityData?.company_overrides?.email ||
    sanityData?.category?.companyInfo?.email;
  const logoSrc =
    sanityData?.company_overrides?.logo?.asset?.url ||
    sanityData?.category?.companyInfo?.logo?.asset?.url;
  const iconSrc =
    sanityData?.company_overrides?.icon?.asset?.url ||
    sanityData?.category?.companyInfo?.icon?.asset?.url;
  const tagline =
    sanityData?.company_overrides?.tagline ||
    sanityData?.category?.companyInfo?.tagline;
  const testimonials = pluckOverride(
    sanityData?.testimonials_override,
    sanityData?.category?.testimonials
  );
  const specials = pluckOverride(
    sanityData?.specials_override,
    sanityData?.category?.specials
  );
  let locations =
    sanityData?.service_area_override?.locations ||
    sanityData?.category?.serviceArea?.locations;
  const gtmId = sanityData?.category?.gtm;
  //Not overwriteable per page
  const conversionId = sanityData?.category?.conversionId;
  const phoneConversionLabel = sanityData?.category?.phoneConversionLabel;
  const formConversionLabel = sanityData?.category?.formConversionLabel;
  const chatConversionLabel = sanityData?.category?.chatConversionLabel;
  const heroBackground = sanityData?.hero_banner?.asset?.url;
  const heroTitle = sanityData?.hero_special?.title;
  const heroSubTitle = sanityData?.hero_special?.details;
  const heroContent = sanityData?.hero_special?.disclaimer;
  const heroHideForm = sanityData?.hero_hide_form;
  const calloutMessage = sanityData?.category?.calloutMessage;
  const calloutBadge = sanityData?.category?.calloutBadge?.asset?.url;
  const calloutGradient = sanityData?.category?.calloutGradient;
  const introText = sanityData?._rawIntro;
  const services = sanityData?.category?.services;
  const testimonialBackground =
    sanityData?.category?.testimonialBackground?.asset?.url;
  const interludeText = sanityData?.interlude_text;
  const interludeImageSrc = sanityData?.interlude_image?.asset?.url;
  const serviceAreaBackground =
    sanityData?.category?.serviceAreaBackground?.asset?.url;
  const badgeObjs = sanityData?.category?.badges;
  const hasClr = sanityData?.category?.companyInfo?.hasClr;
  //colors
  const primaryColor = sanityData?.category?.primaryColor?.hex;
  const secondaryColor = sanityData?.category?.secondaryColor?.hex;
  const primaryBtnColor =
    sanityData?.category?.colorOverrides?.primaryBtnColor?.hex || primaryColor;
  const secondaryBtnColor =
    sanityData?.category?.colorOverrides?.secondaryBtnColor?.hex ||
    secondaryColor;
  const formBgColor =
    sanityData?.category?.colorOverrides?.formBgColor?.hex || secondaryColor;
  const lineColor =
    sanityData?.category?.colorOverrides?.lineColor?.hex || primaryColor;
  const gradientStartColor =
    sanityData?.category?.colorOverrides?.gradientStartColor?.hex ||
    primaryColor;
  const gradientEndColor =
    sanityData?.category?.colorOverrides?.gradientEndColor?.hex ||
    secondaryColor;
  const reviewBgColor =
    sanityData?.category?.colorOverrides?.reviewBgColor?.hex || secondaryColor;
  const reviewBubbleColor =
    sanityData?.category?.colorOverrides?.reviewBubbleColor?.hex ||
    primaryColor;
  const specialsBgColor =
    sanityData?.category?.colorOverrides?.specialsBgColor?.hex || primaryColor;
  const headingTextColor =
    sanityData?.category?.colorOverrides?.headingTextColor?.hex ||
    secondaryColor;

  return (
    <>
      <GlobalStyle
        {...{
          primaryBtnColor,
          secondaryBtnColor,
          lineColor,
          headingTextColor,
          primaryColor,
          secondaryColor,
          formBgColor,
          gradientStartColor,
          gradientEndColor,
          reviewBgColor,
          reviewBubbleColor,
          specialsBgColor,
        }}
      />
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
      <Header {...{ logoSrc, phone }} />
      <Hero
        {...{
          heroBackground,
          formBgColor,
          heroTitle,
          heroSubTitle,
          emailRecipients,
          heroContent,
          hasClr,
          heroHideForm,
        }}
      >
        <SidebarForm recipients={emailRecipients} hasClr={hasClr} />
      </Hero>
      <Intro {...{ introText }} />
      <CalloutBar {...{ calloutMessage, calloutBadge, calloutGradient }} />
      <Services {...{ lineColor, services, iconSrc }} />
      <Testimonials
        {...{
          testimonialBackground,
          reviewBgColor,
          reviewBubbleColor,
          testimonials,
          lineColor,
        }}
      />
      <Interlude {...{ interludeText, interludeImageSrc }} />
      {/* <SpecialsLocations {...{locations, specials, serviceAreaBackground, specialsBgColor, lineColor, emailRecipients}} /> */}
      <Split>
        <Left>
          {specials.length > 0 ? (
            <Specials specials={specials} />
          ) : (
            <>
              <h2 className="font-semibold text-center mb-7 leading-9 text-2xl phablet:text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl">
                Contact Our <span className="font-bold">Specialists Today</span>
              </h2>
              <FullwidthForm
                recipients={emailRecipients}
                isSplit={false}
                hasClr={hasClr}
              />
            </>
          )}
        </Left>
        <Right background={serviceAreaBackground}>
          <Locations locations={locations} />
        </Right>
      </Split>
      {/* <Split>
                <Left>

                </Left>
                <Right background={serviceAreaBackground}>
                    <Locations locations={locations} />
                </Right>
            </Split> */}
      <Contact>
        <FullwidthForm
          recipients={emailRecipients}
          isSplit="true"
          hasClr={hasClr}
        />
      </Contact>
      <Tagline {...{ tagline, lineColor, iconSrc }} />
      <Badges badges={badgeObjs} />
      <Footer {...{ company, address, phone }} />
    </>
  );
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
