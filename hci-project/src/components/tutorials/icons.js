/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { FaBookmark } from "react-icons/fa"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import CartButton from "./cart-button"

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

const Icons = ({ isUserSignedIn, tutorial }) => {
    return (
        <Flex sx={{
            flexDirection: ["row", "column", "column"],
            justifyContent: ["space-around", "center", "center"],
            mt: ["25px", "0px", "0px"],
            mr: ["0px", "0px", "200px"]
        }}>
            {isUserSignedIn ? (
                <Box>
                    <CartButton tutorial={tutorial}/>
                </Box>
            ) : (
                <Box></Box>
            )}
            {isUserSignedIn ? (
                <Box>
                    <BookmarkButton />
                </Box>
            ) : (
                <Box></Box>
            )}
        </Flex>
    )
}

Icons.propTypes = {
    isUserSignedIn: PropTypes.bool.isRequired,
    tutorial: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return { isUserSignedIn: state.isUserSignedIn }
}

export default connect(mapStateToProps)(Icons)
