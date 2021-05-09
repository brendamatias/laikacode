const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'My Gatsby Site',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'laikacode',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
  ],
}
