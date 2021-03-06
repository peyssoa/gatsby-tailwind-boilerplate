module.exports = {
   siteMetadata: {
      title: `Gatsby Tailwind Boilerplate`,
      description: `A boilerplate meant to help get started quickly with Gatsby and Tailwind, using PostCSS`,
      author: `@gatsbyjs`,
   },
   plugins: [
      `gatsby-plugin-react-helmet`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/assets/images`,
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
            icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
         },
      },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-offline`,
  ],
};
