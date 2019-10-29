import React from "react"
import { Link } from "gatsby"

const TutorialMore = () => (
  <div>
    <h1>Tutorial More</h1>

    <ul>
      <li><Link to="/">Back to home</Link></li>
      <li><Link to="/public_pages/tutorials">Back to Tutorials</Link></li>
    </ul>
  </div>
)

export default TutorialMore