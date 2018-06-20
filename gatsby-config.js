module.exports = {
   siteMetadata: {
      title: 'Gatsby Default Starter',
   },
   plugins: [
      'gatsby-plugin-react-helmet',
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      // {
      //    resolve: `gatsby-plugin-favicon`,
      //    options: {
      //       logo: './src/favicon.png',
      //       injectHTML: true,
      //       icons: {
      //          android: false,
      //          appleIcon: false,
      //          appleStartup: false,
      //          coast: false,
      //          favicons: true,
      //          firefox: false,
      //          twitter: false,
      //          yandex: false,
      //          windows: false,
      //       },
      //    },
      // },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            path: `${__dirname}/src/layouts`,
            name: 'layouts',
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            path: `${__dirname}/src/files`,
            name: 'files',
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            path: `${__dirname}/src/images`,
            name: 'images',
         },
      },
      `gatsby-plugin-netlify`, // make sure to put last in the array
   ],
};
