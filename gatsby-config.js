module.exports = {
  siteMetadata: {
    title: `Peter Durham`,
    siteUrl: `https://peterdurham.site/`,
    description: `Portfolio Site by Peter Durham. About, Projects, Blog, and Contact sections.`,
    author: `@peterjdurham`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `./src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `./src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `./src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Peter Durham Portfolio Site`,
        short_name: `Peter Durham - Portfolio`,
        start_url: `/`,
        background_color: `rgb(34, 33, 38)`,
        theme_color: `#1e392a`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
  ],
}
