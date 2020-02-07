/** @jsx jsx */ 

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { Link } from "gatsby"
import Image from "gatsby-image"

const CarouselItem = ({ tutorial }) => {
    const { id, 
            title, 
            image } = tutorial

    return (
        <Flex sx={{
            flexDirection: "column",
            justifyContent: "center"
        }}>
            <Box>
                <h4 sx={{
                    mt: "10px",
                    fontSize: "1.14em",
                    display: "flex !important",
                    flexDirection: "row",
                    justifyContent: "center",
                    textAlign: "center"                
                }}>
                    {title}
                </h4>
            </Box>
            <Box>
                <Image 
                    fluid={image.childImageSharp.fluid}
                    sx={{
                        display: "flex !important",
                        flexDirection: "row",
                        justifyContent: "center",
                        margin: "0 auto"
                    }}
                />
                    <Link 
                        to={`../../public_pages/tutorials/${id}`}
                        sx={{
                            textDecoration: "none",
                            textDecorationColor: "accent"
                        }}
                    >
                        View more
                    </Link>
            </Box>
        </Flex>
    )
}

export default CarouselItem
