import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/reset.css"
import "../styles/global.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/all.min.css'
import Treatments from '../components/Treatments/Treatments'
import HeroUnit from '../components/HeroUnit/HeroUnit'
import Services from '../components/Services/services'
import PricingPlans from '../components/Services/PricingPlans'
import Reviews from '../components/Reviews/Reviews'

export default ({ data }) => {
  return (
    <Layout>
      <HeroUnit />
      <Services />
      <Treatments />
      <PricingPlans />
      <Reviews />
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