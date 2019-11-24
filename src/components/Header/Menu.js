import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

const Menu = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems(
          filter: { slug: { eq: "main-menu" } }
        ) {
          edges {
            node {
              slug
              name
              items {
                title
                url
                object_slug
                wordpress_children {
                  title
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                    (prop, id) => {
                      return (
                        <div key={id}>
                          {prop.url === "#" ? (
                            <NavDropdown
                              title={prop.title}
                              id="basic-nav-dropdown"
                            >
                              {prop &&
                                prop.wordpress_children &&
                                prop.wordpress_children.map((child) => (
                                  <NavDropdown.Item key={child.url} href={child.url}>
                                    {child.title}
                                  </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                          ) : (
                            <Nav.Link href={prop.url}>{prop.title}</Nav.Link>
                          )}
                        </div>
                      )
                    }
                  )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      )
    }}
  />
)

export default Menu
