/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Image from "gatsby-image"
import { useState } from "react"
import { naviagte } from "@reach/router"

const Trending = () => {
    const data = useStaticQuery(graphql`
        query Trending {
            allTrendingJson {
                edges {
                    node {
                        id
                        title
                        image {
                            childImageSharp {
                                fluid(maxWidth: 400) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                                fixed(width: 150, height: 88) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const trending = data.allTrendingJson.edges
    const [number, setNumber] = useState(0)
    const handleClick = () => {
        navigate(`/tutorials/${trending[number].node.id}`)
    }

    return (
        <Flex sx={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center"
        }}>
            <Box>
                <h4 sx={{
                    display: "flex ",
                    flexDirection: "row",
                    justifyContent: "center",
                    mb: "50px !important"
                }}>
                    {trending[number].node.title}
                </h4>
                <Image 
                    fluid={trending[number].node.image.childImageSharp.fluid}
                    sx={{ 
                        width: "350px",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        cursor: "pointer"
                    }}
                    onClick={handleClick}
                />
            </Box>
            <Box>
                <Flex sx={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    mt: "30px"
                }}>
                    {trending.map(({ node }, index) => (
                        <Box key={index} sx={{ width: "100%", maxWidth: "150px", margin: "10px" }}>
                            <Image 
                                fixed={node.image.childImageSharp.fixed}
                                sx={{ width: "150px", cursor: "pointer" }}
                                onClick={e => setNumber(index)}
                            />
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Flex>
    )
}

export default Trending
