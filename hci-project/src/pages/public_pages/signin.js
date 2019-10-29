import React from "react"
import { Link } from "gatsby"

const SignIn = () => (
  <div>
    <h1>Sign in</h1>

    <ul>
        <li><Link to="/private_pages/cart">Cart</Link></li>
        <li><Link to="/private_pages/bookmarks">Bookmarks</Link></li>
    </ul>

    <Link to="/">Back to home</Link>
  </div>
)

export default SignIn