import React from "react"
import { graphql } from "gatsby"
import "../styles/reset.css"
import "../styles/global.css"
import '../styles/font-awesome/all/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
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
      <HeroUnit />
      <Services />
      <Treatments />
      <PricingPlans />
      <Reviews />
      <Map />
    </Layout>
    
  )
}

export const pageQuery = graphql`
  query {
  allWordpressPage {
    edges {
      node {
        id
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
}
`