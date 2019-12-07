import React from "react"
import { Link } from "gatsby"

const BlogLink = ({ ...prop }) => <Link {...prop} />

const BlogPrevious = ({ ...prop }) => <div {...prop} />

const BlogNext = ({ ...prop }) => <div {...prop} />

const BlogNav = ({ ...prop }) => <nav {...prop} />

BlogNav.Link = BlogLink
BlogNav.Previous = BlogPrevious
BlogNav.Next = BlogNext

export default BlogNav