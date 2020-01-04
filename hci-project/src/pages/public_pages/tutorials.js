import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Tutorial from "../../components/tutorials/tutorial"

const Tutorials = ({ data }) => (
  <Layout>
    <h1>Tutorials</h1>

    {data.allTutorialsJson.edges.map(({ node }) =>(
      <Tutorial key={node.id} tutorial={node}/>
    ))}
  </Layout>
)

export default Tutorials

export const query = graphql`{
  allTutorialsJson {
    edges {
      node {
        id
        title
        image {
          childImageSharp {
            fixed(width: 204, height: 120) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        language
        level
        price
      }
    }
  }
}
`