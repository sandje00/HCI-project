/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogList = path.resolve(`./src/templates/blog-list.js`)
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tutorialTemplate = path.resolve(`./src/templates/tutorial-more.js`)

  const {
    data: {
      allMdx: { posts },
    },
  } = await graphql(`
    query BlogPages {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          fileAbsolutePath: { regex: "//src/posts//" }
          frontmatter: { published: { eq: true } }
        }
      ) {
        posts: edges {
          post: node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `)

  const {
    data: {
      allTutorialsJson: { tutorials },
    }
  } = await graphql(`
    query TutorialMoreQuery {
      allTutorialsJson {
        tutorials: edges {
          tutorial: node {
            id
          }
        }
      }
    }
  `)

  posts.forEach(({ post }, index) => {
    const { slug } = post.frontmatter
    const previous = index === 0 ? null : posts[index - 1].post
    const next = index === posts.length - 1 ? null : posts[index + 1].post

    createPage({
      path: `/blog/${slug}`,
      component: blogPost,
      context: {
        slug,
        previous,
        next,
      },
    })
  })

  const postsPerPage = 3
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/blog` : `/blog/${index + 1}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })

  tutorials.forEach(({ tutorial }, index) => {
    createPage({
      path: `/tutorials/${tutorial.id}`,
      component: tutorialTemplate,
      context: {
        id: tutorial.id,
      },
    })
  })
}