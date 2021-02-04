module.exports = {
  siteUrl: 'https://guide.shielkwamm.com',
  generateRobotsTxt: true, // (optional),
  outDir: './out/',
  exclude: ['/vns/*', '/login', '/profile', '/signup', '/admin', '/auth'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/vns/*', '/login', '/profile', '/signup', '/admin', '/auth'],
      },
    ]
  }
}