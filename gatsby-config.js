module.exports = {
  siteMetadata: {
    title: `North Florida Chiropractic Physical Therapy`,
    description: `Dr. Jason Orlando — Treating and Relieving Pain in North Florida for Over 20 Years.`,
    author: `@stevebarakat`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `North Florida Chiropractic Physical Therapy`,
        short_name: `NFCPT`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
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
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-cssnext`)],
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        includedRoutes: ["/*/*/pages", "/*/*/media", "/*/*/menus"],
        excludedRoutes: [
          "/*/*/categories",
          "/*/*/posts",
          "/*/*/tags",
          "/*/*/taxonomies",
          "/*/*/users",
        ],
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: `northfloridachiropracticphysicaltherapy.com`,
        // The protocol. This can be http or https.
        protocol: `http`,
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
          replacementUrl: "https://northfloridachiropracticphysicaltherapy.netlify.com",
        },
      },
    },
    `gatsby-plugin-offline`
  ],
}
