/** @jsx jsx */

import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { FaBookmark } from "react-icons/fa"

import { bookmark } from "../../store/actions"

const BookmarkButton = ({ tutorial, bookmarks }) => {
    let isBookmarked = bookmarks.includes(tutorial)
    const handleBookmarkClick = () => {
        bookmark(tutorial, bookmarks)
        isBookmarked = !isBookmarked
    }

    return (
        <button 
            onClick={handleBookmarkClick}
            sx={{
                backgroundColor: isBookmarked ? "secondary" : "accent",
                borderRadius: "10px",
                borderStyle: "none",
                height: "50px",
                width: "50px",
                textAlign: "center"
            }}
        >
            <FaBookmark 
                sx={{
                    color: isBookmarked ? "primary" : "#000000",
                    fontSize: "2em",
                    mt: "7px"
                }}
            />
        </button>
    )
}

BookmarkButton.propTypes = {
    tutorial: PropTypes.object.isRequired,
    bookmarks: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return { bookmarks: state.bookmarks }
}

export default connect(mapStateToProps, { bookmark })(BookmarkButton)