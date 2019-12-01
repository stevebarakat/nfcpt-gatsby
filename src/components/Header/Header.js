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
        <img src="/logo.svg" alt="logo" />
        </Link>
        <Menu />
  </header>
  </>
  )}

export default Header
