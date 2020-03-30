import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Menu from "./Menu.js"
import Topbar from "./Topbar"
import logo from './logo.png'

const SiteHeader = styled.div`
  display: flex;
  padding: 0.5em;
`

const Header = () => {
  return(
  <>
  <Topbar />
  <SiteHeader>
        <Link to="/">
        <img className="logo" src={logo} alt="logo" />
        </Link>
        <Menu />
  </SiteHeader>
  </>
  )}

export default Header
