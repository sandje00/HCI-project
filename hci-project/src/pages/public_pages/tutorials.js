/** @jsx jsx */

import { useState } from "react"
import { graphql } from "gatsby"
import { FaSearch } from "react-icons/fa"
import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"

import Layout from "../../components/layout"
import Tutorial from "../../components/tutorials/tutorial"

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
        <h1>Tutorials</h1>

        <label>
            <FaSearch />
            <input
              type="text"
              placeholder="Search"
              onChange={handleInputChange}
            />
        </label>

        <select onChange={handleValueChange}>
          <option value={emptyQuery}>All</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

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

        {/* {tutorials.map(({ node }) =>(
          <Tutorial key={node.id} tutorial={node}/>
        ))} */}
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