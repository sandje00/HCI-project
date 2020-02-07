/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { navigate } from "gatsby"
import Image from "gatsby-image"

const Welcome = ({ picture }) => {
    const getStarted = () => {
        navigate("../../public_pages/tutorials")
    }

    return (
        <Flex sx={{
            flexDirection: "column",
            justifyContent: "center"
        }}>
            <Box>
                <Image fluid={picture.childImageSharp.fluid}/>
            </Box>
            <Box>
                <p sx={{ textAlign: "center", fontSize: ["1.2em", "1.4em", "1.5em"] }}>
                    Do you want to learn something new or improve your development skills?
                    Choose from our large collection of tutorials at any level.
                </p>
            </Box>
            <Box sx={{ margin: "0 auto" }}>
                <button
                    onClick={getStarted}
                    sx={{
                        width: ["200px", "250px", "300px"],
                        height: ["40px", "50px", "60px"],
                        backgroundColor: "accent",
                        borderRadius: "10px",
                        borderStyle: "none",
                        textAlign: "center",
                        textDecorationColor: "#000000",
                        cursor: "pointer",
                        fontSize: ["1em", "1.1em", "1.2em"],
                        mt: "25px"
                    }}
                >
                    GET STARTED ->
                </button>
            </Box>
        </Flex>
    )
}

export default Welcome