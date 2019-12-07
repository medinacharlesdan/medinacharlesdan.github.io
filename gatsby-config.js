module.exports = {
  // pathPrefix: `/medinacharlesdan.github.io`,
  siteMetadata: {
    title: `Charles Medina`,
    name: `Charles Medina`,
    siteUrl: `https://medinacharlesdan.github.io`,
    description: `You can browse my repos,ideas,resources on this blog.`,
    hero: {
      heading: `Jr. Fullstack Web Developer. Browse my repos,ideas,resources on this page. 🌎`,
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
