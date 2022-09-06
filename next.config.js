const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "base.scss";`
  },

  async rewrites() {
    return [
      // {
      //   source: '/',
      //   destination: '/home',
      // },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sochke.com',
          },
        ],
        destination: '/about',
      },
    ]
  },
}

module.exports = nextConfig
