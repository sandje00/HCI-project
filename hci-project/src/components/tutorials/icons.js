/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import CartButton from "./cart-button"
import BookmarkButton from "./bookmark-button"

const Icons = ({ isUserSignedIn, tutorial }) => {
    return (
        <Flex sx={{
            flexDirection: "row",
            justifyContent: "space-around",
            maxWidth: "400px",
            margin: "0 auto"
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
                    <BookmarkButton tutorial={tutorial}/>
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
