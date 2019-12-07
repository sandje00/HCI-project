import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import BlogExcerpt from "../../components/blog/blog-excerpt"

const Blog = ({
  data: {
    allMdx: { posts },
  },
}) => (
  <Layout>
    <h1>Blog</h1>
    <BlogExcerpt posts={posts} />
  </Layout>
)

export default Blog

export const query = graphql`
query Posts {
  allMdx(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: {
      fileAbsolutePath: { regex: "//src/posts//" }
      frontmatter: { published: { eq: true } }
    }
  ) {
    posts: edges {
      post: node {
        id
        frontmatter {
          author
          date(formatString: "MMMM DD, YYYY")
          slug
          title
        }
        excerpt(pruneLength: 200)
      }
    }
  }
}
`