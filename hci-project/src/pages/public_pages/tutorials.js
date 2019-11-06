import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

const Tutorials = () => (
  <Layout>
    <h1>Tutorials</h1>

    <ul>
      <li><Link to="/public_pages/tutorialmore">Tutorials more</Link></li>
      <li><Link to="/public_pages/tutorialmore">Tutorials more</Link></li>
      <li><Link to="/public_pages/tutorialmore">Tutorials more</Link></li>
    </ul>

    <Link to="/">Back to home</Link>
  </Layout>
)

export default Tutorials