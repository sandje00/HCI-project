/** @jsx jsx */

import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext, data }) => {
  const { post } = data
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title}/>
      <h4>{post.frontmath4}</h4>
      <span sx={{
        color: "#333333",
        mb: "50px"
      }}>
        {post.frontmatter.date}
      </span>
      <MDXRenderer>{post.body}</MDXRenderer>
      <div sx={{
        display: ["block", "flex"],
        justifyContent: "space-between",
        width: "100%",
        overflow: "hidden",
        mt: 4,
      }}>
        {previous && (
          <Link 
            to={`blog/${previous.frontmatter.slug}`}
            sx={{
              display: "inline-block",
              p: 3,
              color: "primary",
              backgroundColor: "secondary",
              textDecoration: "none",
              textTransform: "uppercase",
              fontWeight: "medium",
              lineHeight: "body",
              letterSpacing: "tight",
              padding: "7px",
              mt: "10px"
            }}
          >
            Previous: {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link 
            to={`blog/${next.frontmatter.slug}`}
            sx={{
              display: "inline-block",
              p: 3,
              color: "primary",
              backgroundColor: "secondary",
              textDecoration: "none",
              textTransform: "uppercase",
              fontWeight: "medium",
              lineHeight: "body",
              letterSpacing: "tight",
              padding: "7px",
              mt: "10px"
            }}
          >
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