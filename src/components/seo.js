import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          url,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
      }
      return (
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="robots" content="index,follow" />
          <html lang="en" />
        </Helmet>
      )
    }}
  />
)

export default SEO

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        url
      }
    }
  }
`
