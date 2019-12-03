import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

export default ({ data }) => {
  const { post } = data
  return (
    <Layout>
      <h4>{post.frontmath4}</h4>
      <span>{post.frontmatter.date}</span>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
      body
    }
  }
`