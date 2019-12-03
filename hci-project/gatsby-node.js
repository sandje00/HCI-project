/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require(`path`)

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/questions/)) {
    page.matchPath = "/questions/*"
    // Update the page.
    createPage(page)
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  const {
    data: {
      allMdx: { posts },
    },
  } = await graphql(`
    query BlogIndex {
      allMdx(
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
  `)

  posts.forEach(({ post }) => {
    const { slug } = post.frontmatter
    createPage({
      path: `public_pages/blog/${slug}`,
      component: blogPost,
      context: {
        // additional data can be passed via context;
        // this will be used in the GraphQL query as
        // an query variable
        slug,
      },
    })
  })
}