import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

const TutorialMore = () => (
  <Layout>
    <h1>Tutorial More</h1>

    <ul>
      <li><Link to="/">Back to home</Link></li>
      <li><Link to="/public_pages/tutorials">Back to Tutorials</Link></li>
    </ul>
  </Layout>
)

export default TutorialMore