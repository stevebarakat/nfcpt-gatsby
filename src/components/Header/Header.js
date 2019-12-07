import { Link } from "gatsby"
import React from "react"
import Menu from "./Menu.js"
import Topbar from "./Topbar"
import '../../images/logo.svg'
import "./Header.css"

const Header = () => {
  return(
  <>
  <Topbar />
  <header className="site-header">
        <Link to="/">
        <img src="http://old.northfloridachiropracticphysicaltherapy.com/wp-content/uploads/2019/08/logo.svg" alt="logo" />
        </Link>
        <Menu />
  </header>
  </>
  )}

export default Header
