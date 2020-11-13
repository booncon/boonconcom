module.exports = {
  siteMetadata: {
    title: `booncon`,
    slogan: `Working with friends.`,
    description: `We are booncon, we are changing the way people experience work. As the lines between life and work are blurring, it’s important for everybody to love what they are doing. We are on a mission to make work lovable.`,
    author: `@sftsk`,
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "ong3eiq",
        },
        custom: {
          families: ["Helia"],
          urls: ["/fonts/helia.css"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `booncon`,
        short_name: `booncon`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `static/images/logo_bc-main-square.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `podcast`,
        path: `${__dirname}/src/pages/podcast/`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-podcast-feed-mdx`,
      options: {
        title: `bits & pieces`,
        subtitle: `How to get things done & love your work.`,
        description: `A show about why work is not a job, friendships and riding unicorns. 
        Hosted by Lukas Jakob Hafner and Tobias Johannes.`,
        summary: `A show about why work is not a job, friendships and riding unicorns. 
        Hosted by Lukas Jakob Hafner and Tobias Johannes.`,
        podcastType: `episodic`,
        siteUrl: `https://booncon.com`,
        imageUrl: `https://booncon.com/podcast-image/png`,
        feedUrl: `https://podcast.com/pocast-rss-feed.xml`,
        language: `en-us`,
        copyright: `Copyright © 2020 booncon`,
        authorName: `booncon`,
        ownerName: `Lukas Jakob Hafner`,
        ownerEmail: `hello@booncon.com`,
        explicit: `no`,
        publicationDate: `Jan 25, 2020 10:00:00 GMT`,
        category1: `Society &amp; Culture`,
        category2: `Business`,
        category3: `Education`,
        timeToLive: `60`,
        outputPath: `/podcast-rss-feed.xml`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `3902564718`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-image`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
