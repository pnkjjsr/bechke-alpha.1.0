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
      //   source: '/about',
      //   destination: '/',
      // },
      {
        source: 'bechke-alpha-1-0-pnkjjsr.vercel.app',
        has: [
          {
            type: 'host',
            value: 'vercel.app',
          },
        ],
        destination: '/about',
      },
    ]
  },
}

module.exports = nextConfig
