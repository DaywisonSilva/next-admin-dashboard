/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/module/register',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
