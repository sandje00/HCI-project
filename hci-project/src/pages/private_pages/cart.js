import React from "react"
import { Link } from "gatsby"

/* import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo" */

const Cart = () => (
  <div>
    <h1>Cart</h1>

    <ul>
      <li><Link to="/public_pages/tutorials">Tutorials</Link></li>
      <li><Link to="/public_pages/blog">Blog</Link></li>
    </ul>

    <h2>
      <Link to="/">Home</Link>
    </h2>
  </div>
)

export default Cart