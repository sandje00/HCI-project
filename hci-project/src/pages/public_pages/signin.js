import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

const SignIn = () => (
  <Layout>
    <h1>Sign in</h1>

    <ul>
        <li><Link to="/private_pages/cart">Cart</Link></li>
        <li><Link to="/private_pages/bookmarks">Bookmarks</Link></li>
    </ul>

    <Link to="/">Back to home</Link>
  </Layout>
)

export default SignIn