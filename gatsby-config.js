module.exports = {
  siteMetadata: {
    title: `North Florida Chiropractic Physical Therapy`,
    description: `A static Gatsby site with content pulled from Wordpress rest api.`,
    author: `@stevebarakat`,
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
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
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-cssnext`)],
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        includedRoutes: [
          '/*/*/pages',
         '/*/*/menus'
      ],
      excludedRoutes: [
        '/*/*/categories',
        '/*/*/posts',
        '/*/*/media',
        '/*/*/tags',
        '/*/*/taxonomies',
        '/*/*/users',
      ],
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: `northfloridachiropracticphysicaltherapy.com`,
        // The protocol. This can be http or https.
        protocol: `https`,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on WordPress.com
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://northfloridachiropracticphysicaltherapy.com",
          replacementUrl: "http://localhost:8000",
        }
      },
    },
  ],
}
