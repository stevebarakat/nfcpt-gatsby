import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return(
  <>
  <footer className="site-footer">
    &copy; {new Date().getFullYear()}, Built with {` `}
    <Link to="https://www.gatsbyjs.org">Gatsby</Link>
  </footer>
  </>
  )}

export default Footer
