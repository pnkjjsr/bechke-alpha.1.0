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
      //   source: '/home',
      //   destination: '/',
      // },
      {
        source: '/home',
        has: [
          {
            type: 'host',
            value: 'vercel.app',
          },
        ],
        destination: '/home',
      },
    ]
  },
}

module.exports = nextConfig
