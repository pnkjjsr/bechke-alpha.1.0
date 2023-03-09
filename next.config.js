const path = require("path");

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',

})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "base.scss";`
  },

  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'sochke.com',
          },
        ],
        permanent: false,
        destination: '/home',
      },
    ]
  },

  async rewrites() {
    return [
      {
        source: '/home',
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

module.exports = withPWA(nextConfig)
