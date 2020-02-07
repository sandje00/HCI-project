import React from "react"
import { Link, graphql } from "gatsby"
import { Styled } from 'theme-ui'

import Layout from "../components/layout"
import Welcome from "../components/homepage/welcome"
/* import SEO from "../components/seo" */

const Home = ({ data }) => {
  const picture = data.allFile.edges[0].node
  return (
    <Layout>
      <Welcome picture={picture}/>
    </Layout>
  )
}

export default Home

export const query = graphql`
{
    allFile(filter: {absolutePath: {regex: "//src/images/homepage//"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`