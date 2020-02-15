/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { navigate } from "@reach/router"

import { unbookmark } from "../../store/actions"

const Button = ({ bookmarks, unbookmark, id }) => {
    const handleRemoveBookmark = () => {
        unbookmark(id, bookmarks)
    }

    return (
        <button 
            onClick={handleRemoveBookmark}
            sx={{
                backgroundColor: "secondary",
                borderRadius: "10px",
                borderStyle: "none",
                height: "40px",
                width: "90px",
                textAlign: "center"
            }}
        >
            Remove
        </button>
    )
}

Button.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    unbookmark: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}
const mapStateToProps = (state) => {
    return { bookmarks: state.bookmarks }
}

const Remove = connect(mapStateToProps, { unbookmark })(Button)

const BookmarksItem = ({ tutorial }) => {
    const handleMore = () => {
        navigate(`/tutorials/${tutorial.id}`)
    }

    return (
        <article sx={{
            width: "250px",
            height: "300px",
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
                    <h5 sx={{
                        mt: "10px",
                        fontSize: "1.15em"
                    }}>
                        {tutorial.title}
                    </h5>
                </Box>
                <Box sx={{ width: "100%", maxWidth: "204px", maxHeight: "120px" }}>
                    <Image 
                        fluid={tutorial.image.childImageSharp.fluid}
                        sx={{ width: "204px", height: "120" }}
                    />
                </Box>
            </Flex>
            <Flex sx={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: "60px"
                    }}>
                        <Box>
                            <button 
                                onClick={handleMore}
                                sx={{
                                    backgroundColor: "accent",
                                    borderRadius: "10px",
                                    borderStyle: "none",
                                    height: "40px",
                                    width: "90px",
                                    textAlign: "center",
                                    mr: "20px"
                                }}>
                                More
                            </button>
                        </Box>
                        <Box>
                            <Remove id={tutorial.id}/>
                        </Box>
                    </Flex>
        </article>
    )
}

export default BookmarksItem
