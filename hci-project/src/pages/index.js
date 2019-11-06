import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
/* import Image from "../components/image"
import SEO from "../components/seo" */

const Home = () => (
  <Layout>
    <h1>HCI project</h1>
    <h2>Pages</h2>

    <ul>
      <li><Link to="/public_pages/tutorials">Tutorials</Link></li>
      <li><Link to="/public_pages/blog">Blog</Link></li>
      <li><Link to="/public_pages/signin">Sign in</Link></li>
      <li><Link to="/public_pages/signup">Sign up</Link></li>
    </ul>
    
  </Layout>
)

export default Home
