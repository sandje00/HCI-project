import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

const Blog = () => (
  <Layout>
    <h1>Blog</h1>

    <ul>
      <li><Link to="/public_pages/blogmore">Blog more</Link></li>
      <li><Link to="/public_pages/blogmore">Blog more</Link></li>
      <li><Link to="/public_pages/blogmore">Blog more</Link></li>
    </ul>

    <Link to="/">Back to home</Link>
  </Layout>
)

export default Blog