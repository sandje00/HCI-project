import React from "react"
import { Link } from "gatsby"

const BlogMore = () => (
  <div>
    <h1>Blog More</h1>
    <ul>
      <li><Link to="/">Back to home</Link></li>
      <li><Link to="/public_pages/blog">Back to blog</Link></li>
    </ul>
  </div>
)

export default BlogMore