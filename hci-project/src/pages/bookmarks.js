/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookmarksItem from "../components/tutorials/bookmarks-item"

const Bookmarks = ({ bookmarks }) => {
  console.log(bookmarks)
  return (
    <Layout>
      <SEO title="Bookmarks"/>
      <h1>Bookmarks</h1>
      <div>
        {bookmarks &&
          <Flex sx={{
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            margin: "0 auto"
          }}>
            {bookmarks.map( bookmark =>(
              <Box key={bookmark.id}>
                <BookmarksItem key={bookmark.id} tutorial={bookmark}/>
              </Box>
            ))}
          </Flex>}
        </div>
    </Layout>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return { bookmarks: state.bookmarks }
}

export default connect(mapStateToProps)(Bookmarks)
