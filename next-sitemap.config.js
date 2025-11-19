/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://alphareum.github.io',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
