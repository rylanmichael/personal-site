[![Codacy Badge](https://api.codacy.com/project/badge/Grade/693faabe0a044180a7fc6045d19f1b60)](https://www.codacy.com/app/rylanmichael/personal-site?utm_source=github.com&utm_medium=referral&utm_content=rylanmichael/personal-site&utm_campaign=Badge_Grade)

# Rylan's Portfolio and Notes Website

I'm passionate about technology and needed a place to release, document, and process information. This project aims to improve my information retention and improve my writing style.

## TODO Features

- Improve loading times and performance (pre-rendered HTML? automatic chunk loading of JS failes?)
- Utilize the following features
  - High configurability:
    - User information
    - User social profiles
    - Copyright information
  - Author segment
    - Name
    - Location
    - Description
    - Links
  - Tags
    - Separate page for posts under each tag
  - Categories
    - Separate page for posts under each category
  - Google Analytics support
  - SEO
    - Sitemap generation
    - robots.txt
    - General description tags
    - Schema.org JSONLD (Google Rich Snippets)
    - OpenGraph Tags (Facebook/Google+/Pinterest)
    - Twitter Tags (Twitter Cards)
  - RSS feeds
  - Loading progress for slow networks
  - Offline support
  - Web App Manifest support
  - Netlify deploy configuration
  - Development tools
    - ESLint for linting
    - Prettier for code style
    - Remark-Lint for linting Markdown
    - write-good for linting English prose
    - gh-pages for deploying to GitHub pages (Integrate the current scripts for this)

## Getting Started

```sh
git clone https://github.com/rylanmichael/personal-site.git
cd personal-site
npm install
npm run develop # or gatsby develop
npm run deploy # when deploying to GitHub pages
```

## Configuration

Edit the export object in `data/SiteConfig`:

```js
module.exports = {
  siteTitle: "Gatsby Advanced Starter", // Site title.
  siteTitleShort: "GA Starter", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "GatsbyJS Advanced Starter", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://vagr9k.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-advanced-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A GatsbyJS stater with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Advanced User", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K/gatsby-advanced-starter",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Vagr9K",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:vagr9k@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Advanced User", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
```

WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!
