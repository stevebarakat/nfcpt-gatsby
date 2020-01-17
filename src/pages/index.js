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
    <meta name="google-site-verification" content="FNh4AmaEsEF38SmUVY0BEhFfgWB4F7q6P8vv0aVlYpg" />
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
