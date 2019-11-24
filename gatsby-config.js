module.exports = {
  siteMetadata: {
    title: `North Florida Chiropractic Physical Therapy`,
    description: `A static Gatsby site with content pulled from Wordpress rest api.`,
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
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Raleway\:400,500,600`,
    //       `Roboto\:500,700` 
    //     ],
    //     display: 'swap'
    //   }
    // },
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
          replacementUrl: "https://localhost:8000",
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/html/*": [
            "cache-control: public, max-age=0, must-revalidate"
          ],
          "/page-data/*": [
            "cache-control: public, max-age=0, must-revalidate"
          ],
          "/app-data/*": [
            "cache-control: public, max-age=0, must-revalidate"
          ],
          "/static/*": [
            "cache-control: public, max-age=31536000, immutable"
          ],
          "/js/*": [
            "cache-control: public, max-age=31536000, immutable"
          ],
          "/css/*": [
            "cache-control: public, max-age=31536000, immutable"
          ],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    `gatsby-plugin-offline`
  ],
}
