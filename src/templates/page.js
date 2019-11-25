import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.allWordpressPage.edges[0].node
  console.log(post)
  return (
    <Layout>
    <SEO title={post.title} />
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`