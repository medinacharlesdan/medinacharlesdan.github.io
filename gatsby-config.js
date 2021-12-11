module.exports = {
  siteMetadata: {
    title: `Charles Medina`,
    name: `Charles Medina`,
    siteUrl: `https://novela.narative.co`,
    description: `You can browse my repo,ideas,resources on this blog. Im using Novela Gatsby theme`,
    hero: {
      heading: `Charles Dan Medina 💙 `,
      maxWidth: 652,
    },
    social: [
     
      {
        name: `github`,
        url: `https://github.com/medinacharlesdan`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/charlessmedina/`,
      },{
        name: `facebook`,
        url: `https://www.facebook.com/MedinaCharlesD`,
      },
      
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Charles Medina`,
        short_name: `Charles Medina`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
