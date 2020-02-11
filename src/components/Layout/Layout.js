import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import SEO from "../seo"
import { ParallaxProvider } from 'react-scroll-parallax';

const Layout = ({ children }) => {
 

  return (
    <>
      <SEO />
      <Header />
      <ParallaxProvider>
        {children}
      </ParallaxProvider>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
