/** @jsx jsx */

import { useState } from "react"
import { graphql } from "gatsby"
import { FaSearch, FaFilter } from "react-icons/fa"
import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tutorial from "../components/tutorials/tutorial"

const Tutorials = ({ data }) => {
  const allTutorials = data.allTutorialsJson.edges
  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value
    const tutorials = data.allTutorialsJson.edges
    const filteredData = tutorials.filter(tutorial => {
      const { title } = tutorial.node
      return (
        title.toLowerCase().includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredData,
    })

  }

  const handleValueChange = event => {
    const query = event.target.value
    const tutorials = data.allTutorialsJson.edges
    let filteredData = []
    if(query === emptyQuery)
      filteredData = tutorials
    
    filteredData = tutorials.filter(tutorial => {
      const { level } = tutorial.node
      return (
        level === query
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasResult = filteredData && query !== emptyQuery
  const tutorials = hasResult ? filteredData : allTutorials

  return (
      <Layout>
        <SEO title="Tutorials"/>
        <Flex sx={{
          justifyContent: "space-between",
          mt: "50px"
        }}>
          <Box>
            <label sx={{
              height: "35px",
              width: "200px",
              backgroundColor: "#ffffff",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#787878",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end"
            }}>
                <FaSearch sx={{
                  fontSize: "1em",
                  color: "#787878",
                  mt: "8px",
                  mr: "5px"
                }}/>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleInputChange}
                  sx={{
                    border: "none",
                    heignt: "35px",
                    width: "160px"
                  }}
                />
            </label>
          </Box>
          <Box>
            <label sx={{
              height: "35px",
              width: "200px",
              mr: "90px",
              backgroundColor: "#ffffff",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#787878",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end"
            }}>
                <FaFilter sx={{
                  fontSize: "1em",
                  color: "#787878",
                  mt: "8px",
                  mr: "5px"
                }}/>
                <select
                  onChange={handleValueChange}
                  sx={{
                    border: "none",
                    heignt: "35px",
                    width: "160px"
                  }}>
                    <option value={emptyQuery}>All</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </label>
          </Box>
        </Flex>

        <div>
          <Flex sx={{
            justifyContent: "flex-start",
            flexWrap: "wrap"
          }}>
            {tutorials.map(({ node }) =>(
              <Box key={node.id}>
                <Tutorial key={node.id} tutorial={node}/>
              </Box>
            ))}
          </Flex>
        </div>
      </Layout>
  )
}

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