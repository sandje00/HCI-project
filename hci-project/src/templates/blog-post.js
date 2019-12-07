import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

export default ({ pageContext, data }) => {
  const { post } = data
  const { previous, next } = pageContext

  return (
    <Layout>
      <h4>{post.frontmath4}</h4>
      <span>{post.frontmatter.date}</span>
      <MDXRenderer>{post.body}</MDXRenderer>
      <div>
        {previous && (
          <Link to={`public_pages/blog/${previous.frontmatter.slug}`}>
            Previous: {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link to={`public_pages/blog/${next.frontmatter.slug}`}>
            Next: {next.frontmatter.title}
          </Link>
        )}
      </div>
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