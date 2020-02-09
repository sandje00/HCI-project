/** @jsx jsx */

import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useWindowWidth } from "@react-hook/window-size"


const BlogLink = ({ ...prop }) => {
    let width = useWindowWidth()
    let condition = width > 893

    return (
        <Link 
            {...prop}
            sx={{
                display: "inline-block",
                p: 3,
                color: "primary",
                backgroundColor: "secondary",
                textDecoration: "none",
                textTransform: "uppercase",
                fontWeight: "medium",
                lineHeight: "body",
                letterSpacing: "tight",
                padding: "10px",
                ml: condition ? "15px" : "0"
            }}/>
    )
}

const BlogPrevious = ({ ...prop }) => (
    <div {...prop} sx={{ width: ["100%", "50%"] }} />
)

const BlogNext = ({ ...prop }) => (
    <div 
        {...prop}
        sx={{
            width: ["100%", "50%"],
            marginTop: [2, 0],
            textAlign: "right"
        }}
    />
)

const BlogNav = ({ ...prop }) => (
    <nav 
        {...prop} 
        sx={{
            display: ["block", "flex"],
            justifyContent: "space-between",
            width: "100%",
            overflow: "hidden",
            mt: 4,
        }}
    />
)

BlogNav.Link = BlogLink
BlogNav.Previous = BlogPrevious
BlogNav.Next = BlogNext

export default BlogNav
