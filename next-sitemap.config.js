/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yarafrica.org",
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  outDir: "./public",
  exclude: ["/dashboard", "/dashboard/*", "/api/*", "/server-sitemap.xml"],
};
