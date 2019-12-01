import React from "react"
import "../styles/reset.css"
import "../styles/global.css"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import Treatments from '../components/Treatments/Treatments'
import HeroUnit from '../components/HeroUnit/HeroUnit'
import Services from '../components/Services/Services'
import PricingPlans from '../components/PricingPlans/PricingPlans'
import Map from '../components/Map/Map'
import Reviews from '../components/Reviews/Reviews'
import Helmet from "react-helmet"

export default ({ data }) => {
  return (
    <Layout>
    <Helmet>
    <link rel="preconnect" href="https://www.google.com/" crossorigin></link>
    <link rel="preconnect" href="https://developers.google.com/" crossorigin></link>
    <link rel="preconnect" href="https://cors-anywhere.herokuapp.com" crossorigin></link>
    <link rel="preload" as="document" href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13796.616919431084!2d-81.743945!3d30.175588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x57bbd11d704eb814!2sNorth%20Florida%20Chiropractic%20Physical%20Therapy!5e0!3m2!1sen!2sus!4v1573806056551!5m2!1sen!2sus" />
    </Helmet>
    <SEO title="Orange Park Chiropractor" />    
      <HeroUnit />
      <Services />
      <Treatments />
      <PricingPlans />
      <Reviews />
      <Map />
    </Layout>
  )
}
