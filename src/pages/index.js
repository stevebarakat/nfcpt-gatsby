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

export default ({ data }) => {
  return (
    <Layout>
    <SEO title="Orange Park Chiropractor | North Florida Chiropractic Physical Therapy" />    
      <HeroUnit />
      <Services />
      <Treatments />
      <PricingPlans />
      <Reviews />
      <Map />
    </Layout>
  )
}
