import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const TreatmentsImg = () => {
  const data = useStaticQuery(graphql`
    {
      allImageSharp(filter: {id: {eq: "0da7dd4a-f29d-5f7e-8b0c-d20ad96e691b"}}) {
        nodes {
          id
          original {
            src
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default TreatmentsImg
