import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "gatsby-image"
/* import SEO from "../components/seo" */

const Home = ({ data }) => (
  <Layout>
    <h1>HCI project</h1>
    <h2>Pages</h2>

    <ul>
      <li><Link to="/public_pages/tutorials">Tutorials</Link></li>
      <li><Link to="/public_pages/blog">Blog</Link></li>
      <li><Link to="/public_pages/signin">Sign in</Link></li>
      <li><Link to="/public_pages/signup">Sign up</Link></li>
    </ul>
    
    {/* <Image fluid={data.allFile.edges[0].node.childImageSharp.fluid} /> */}

    {data.allFile.edges.map(({node})=> ( 
      <Image key={node.id} fluid={node.childImageSharp.fluid} /> 
    ))}

  </Layout>
)

export default Home

export const query = graphql`
{
    allFile(filter: {absolutePath: {regex: "//src/images//"}}) {
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