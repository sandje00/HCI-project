/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import Image from "gatsby-image"

const BookmarksItem = ({ tutorial }) => {
    return (
        <article sx={{
            width: "250px",
            height: "374px",
            mt: "50px",
            mr: "0px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            border: "1px",
            borderStyle: "solid",
            borderColor: "#cccccc"
        }}>
            <Flex sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center"
            }}>
                <Box>
                    <h5>{tutorial.title}</h5>
                </Box>
                <Box>
                    <Image 
                        fluid={tutorial.image.childImageSharp.fluid}
                        sx={{ maxWidth: "250px" }}
                    />
                </Box>
                <Box>
                    <button>More</button>
                </Box>
                <Box>
                    <button>Add to cart</button>
                </Box>
                <Box>
                    <button>Remove</button>
                </Box>
            </Flex>
        </article>
    )
}

export default BookmarksItem
