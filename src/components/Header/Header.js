import { Link } from "gatsby"
import React from "react"
import Menu from "./Menu.js"
import Topbar from "./Topbar"
import logo from './logo.png'
import "./Header.css"
console.log(logo)

const Header = () => {
  return(
  <>
  <Topbar />
  <header className="site-header">
        <Link to="/">
        <img src={logo} alt="logo" width="250" />
        </Link>
        <Menu />
  </header>
  </>
  )}

export default Header
