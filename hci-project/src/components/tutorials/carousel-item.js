/** @jsx jsx */ 

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { navigate } from "@reach/router"
import Image from "gatsby-image"

const CarouselItem = ({ tutorial }) => {
    const { id, 
            title, 
            image } = tutorial

    const handleClick = () => {
        navigate(`../../public_pages/tutorials/${id}`)
    }

    return (
        <Flex sx={{
            flexDirection: "column",
            justifyContent: "center"
        }}>
            <Box>
                <h4 
                    onClick={handleClick}
                    sx={{
                        mt: "10px",
                        fontSize: "1.14em",
                        display: "flex !important",
                        flexDirection: "row",
                        justifyContent: "center",
                        textAlign: "center",
                        ":hover": { color: "accent", cursor: "pointer" }                
                    }}>
                        {title}
                </h4>
            </Box>
            <Box>
                <Image 
                    fluid={image.childImageSharp.fluid}
                    onClick={handleClick}
                    sx={{
                        display: "flex !important",
                        flexDirection: "row",
                        justifyContent: "center",
                        margin: "0 auto",
                        cursor: "pointer"
                    }}
                />
            </Box>
        </Flex>
    )
}

export default CarouselItem
