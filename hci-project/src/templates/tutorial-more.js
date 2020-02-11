/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icons from "../components/tutorials/icons"

const TutorialMore = ({ data }) => {
    const tutorial = data.allTutorialsJson.edges[0].node
    
    return (
        <Layout>
            <SEO title={tutorial.title}/>
            <Flex sx={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: ["column", "row", "row"],
                flexWrap: "wrap"
            }}>
                <Box sx={{ width: "100%", maxWidth: "250px" }}>
                    <Image 
                        fluid={tutorial.image.childImageSharp.fluid}
                        sx = {{ maxWidth: "300px",  }}
                    />
                </Box>
                <Box sx={{ flexGrow: "0.5" }}>
                    <Flex sx={{
                        flexDirection: "column",
                        maxWidth: "400px"
                    }}>
                        <Box>
                            <h3 sx={{ mt: ["30px", "0px", "0px"] }}>
                                {tutorial.title}
                            </h3>
                        </Box>
                        <Box>
                            <ul sx={{
                                listStyleType: "none",
                                ml: "0px"
                            }}>
                                <li>Language: {tutorial.language}</li>
                                <li>Level: {tutorial.level}</li>
                                <li><b>Price: ${tutorial.price}</b></li>
                            </ul>
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Icons />
                </Box>
            </Flex>
            
            <h4 sx={{ mt: "50px" }}>Summary:</h4>
            <ul>
                {tutorial.summary.map(
                    (item, index) => <li key={index}>{item}</li>
                )}
            </ul>
        </Layout>
    )
}

export default TutorialMore

export const query = graphql`
    query TutorialQuery($id: String!) {
        allTutorialsJson(filter: {
            id: {eq: $id}
        }) {
            edges {
                node {
                    id
                    title
                    image {
                        childImageSharp {
                            fluid(maxWidth: 300) {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                    language
                    level
                    price
                    summary
                }
            }
        }
    }
` 
