module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    menuLinks: [
      {
        name: 'home',
        path: '/'
      },
      {
        name: 'blog',
        path: '/public_pages/blog'
      },
      {
        name: 'blogmore',
        path: '/public_pages/blogmore'
      },
      {
        name: 'signin',
        path: '/public_pages/signin'
      },
      {
        name: 'signup',
        path: '/public_pages/signup'
      },
      {
        name: 'tutorialmore',
        path: '/public_pages/tutorialmore'
      },
      {
        name: 'tutorials',
        path: '/public_pages/tutorials'
      },
      {
        name: 'cart',
        path: '/private_pages/cart'
      },
      {
        name: 'bookmarks',
        path: '/private_pages/bookmarks'
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
