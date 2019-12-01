import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"

const Tutorials = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      
    </Layout>
  )
}
export default Tutorials

export const query = graphql`{
  allTutorialsJson {
    edges {
      node {
        title
        language
        level
        price
      }
    }
  }
}
`