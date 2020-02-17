/** @jsx jsx */

import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { FaBookmark } from "react-icons/fa"
import { useState } from "react"

import { bookmark, unbookmark } from "../../store/actions"

const BookmarkButton = ({ tutorial, bookmarks }) => {
    const [added, setAdded] = useState(JSON.stringify(bookmarks).includes(JSON.stringify(tutorial)))
    const handleBookmarkClick = () => {
        if(added) {
            unbookmark(tutorial.id, bookmarks)
            setAdded(false)
        }
        else {
            bookmark(tutorial, bookmarks)
            setAdded(true)
        }
    }

    return (
        <button 
            onClick={handleBookmarkClick}
            sx={{
                backgroundColor: added ? "secondary" : "accent",
                borderRadius: "10px",
                borderStyle: "none",
                height: "50px",
                width: "150px",
                textAlign: "center",
                cursor: "pointer",
                mt: "20px"
            }}
        >
            {added ? (
                <span sx={{ color: "#000000" }}>
                    Remove
                </span>
            ) : (
                <span sx={{ color: "#000000" }}>
                    Bookmark
                </span>
            )}
                Bookmark
            </span>
            <FaBookmark 
                sx={{
                    color: added ? "primary" : "#000000",
                    fontSize: "1em",
                    ml: "5px"
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

export default connect(mapStateToProps, { bookmark, unbookmark })(BookmarkButton)
