/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { Link } from "gatsby"
import Image from "gatsby-image"

const CartItem = ({ tutorial }) => {
    return (
        <Flex sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Box>
                <Link 
                    to={`/tutorials/${tutorial.id}`}
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <Image
                        fluid={tutorial.image.childImageSharp.fluid}
                        sx={{ maxWidth: "150px" }}
                    />
                </Link>
            </Box>
            <Box>
                <Link to={`/tutorials/${tutorial.id}`}>
                    <span>{tutorial.title}</span>
                </Link>
            </Box>
            <Box>
                <button>Remove</button>
            </Box>
        </Flex>
    )
}

export default CartItem
