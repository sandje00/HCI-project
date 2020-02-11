/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { FaShoppingCart, FaBookmark } from "react-icons/fa"

const CartButton = () => (
    <button sx={{
        backgroundColor: "accent",
        borderRadius: "10px",
        borderStyle: "none",
        height: "50px",
        width: "50px",
        textAlign: "center",
        mb: ["0px", "50px", "50px"],
        mr: ["50px", "0px", "0px"]
    }}>
        <FaShoppingCart 
            sx={{
                color: "#000000",
                fontSize: "2em",
                mt: "7px"
            }}
        />
    </button>
)

const BookmarkButton = () => (
    <button sx={{
        backgroundColor: "accent",
        borderRadius: "10px",
        borderStyle: "none",
        height: "50px",
        width: "50px",
        textAlign: "center"
    }}>
        <FaBookmark 
            sx={{
                color: "#000000",
                fontSize: "2em",
                mt: "7px"
            }}
        />
    </button>
)

const Icons = () => {
    return (
        <Flex sx={{
            flexDirection: ["row", "column", "column"],
            justifyContent: ["space-around", "center", "center"],
            mt: ["25px", "0px", "0px"],
            mr: ["0px", "0px", "200px"]
        }}>
            <Box>
                <CartButton />
            </Box>
            <Box>
                <BookmarkButton />
            </Box>
        </Flex>
    )
}

export default Icons
