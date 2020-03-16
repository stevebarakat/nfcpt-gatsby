import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Menu from "./Menu.js"
import Topbar from "./Topbar"
import logo from './logo.png'

const SiteHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  padding: 0.5em 3em 0.5em;
`

const Header = () => {
  return(
  <>
  <Topbar />
  <SiteHeader>
        <Link to="/">
        <img src={logo} alt="logo" />
        </Link>
        <Menu />
  </SiteHeader>
  </>
  )}

export default Header
