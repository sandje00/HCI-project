/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"

import github from "../assets/github.png"
import gatsby from "../assets/gatsby.png"

const GitHub = () => (
    <a href="https://github.com/sandje00">
        <img
            src={github}
            sx={{
                height: "50px",
                width: "50px"
            }}
        />
    </a>
)

const Gatsby = () => (
    <a href="https://www.gatsbyjs.org/">
        <img
            src={gatsby}
            sx={{
                height: "50px",
                width: "50px"
            }}
        />
    </a>
)

const Footer = () => (
    <footer sx={{
        paddingTop: "5%",
        mt: "10%",
        width: "100%",
        backgroundColor: "muted"
    }}>
        <Flex sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto"
        }}>
            <Box>
                <Flex sx={{
                    flexDirection: "row",
                    justifyContent: "center",
                    margin: "0 auto"
                }}>
                    <Box>
                        <GitHub />
                    </Box>
                    <Box sx={{ padding: "5px" }}/>
                    <Box>
                        <Gatsby />
                    </Box>
                </Flex>
            </Box>
            <Box>
                <p sx={{ color: "#333333", fontSize: "1.2em" }}>HCI 2019/2020, FESB</p>
            </Box>
            <Box>
                <p sx={{ color: "#333333" }}>Stella Anđelić</p>
            </Box>
        </Flex>
    </footer>
)

export default Footer
