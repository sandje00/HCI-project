/** @jsx jsx */

import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../components/homepage/welcome"
import Trending from "../components/homepage/trending"

const Home = ({ data }) => {
  const picture = data.allFile.edges[0].node
  return (
    <Layout>
      <SEO title="Home"/>
      <Welcome picture={picture}/>
      <h1 sx={{
        display: "flex ",
        flexDirection: "row",
        justifyContent: "center",
        mt: "100px !important",
        mb: "50px !important"
      }}>
        Trending
      </h1>
      <Trending />
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