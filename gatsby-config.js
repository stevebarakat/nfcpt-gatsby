module.exports = {
  siteMetadata: {
    title: `Orange Park Chiropractor | North Florida Chiropractic Physical Therapy`,
    titleTemplate: "%s · North Florida Chiropractic Physical Therapy",
    description: `Orange Park Chiropractor, Dr. Jason Orlando's chiropractic team relieves back, neck, spine pain, accident recovery, work / sports injuries - (904) 272-4329`,
    url: "https://northfloridachiropracticphysicaltherapy.com/",
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
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
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
      resolve: `gatsby-source-google-places`,
      options: {
        placeId: "ChIJU_OKSH_D5YgRFLhOcB3Ru1c",
        apiKey: "AIzaSyCZNXNCNGCISImN_bupjPe-pZft6y7pkxw"
      }
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
        baseUrl: `old.northfloridachiropracticphysicaltherapy.com`,
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
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://northfloridachiropracticphysicaltherapy.com",
        //   replacementUrl: "https://old.northfloridachiropracticphysicaltherapy.com",
        // },
      },
    },
    `gatsby-plugin-offline`
  ],
}
