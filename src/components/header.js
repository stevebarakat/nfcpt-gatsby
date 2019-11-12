import { Link } from "gatsby"
import React from "react"
import Menu from "./menu.js"

const Header = () => {
  return(
  <>
  <header className="site-header">
        <Link to="/">
        <img src="https://northfloridachiropracticphysicaltherapy.com/wp-content/uploads/2019/08/logo.svg" alt="logo" />
        </Link>
        <Menu />
  </header>
  </>
  )}

export default Header
