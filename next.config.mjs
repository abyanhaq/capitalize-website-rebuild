/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix live-site URL typos with permanent redirects
  async redirects() {
    return [
      {
        source: '/hospitality-analytics-consutling/:path*',
        destination: '/hospitality-analytics-consulting/:path*',
        permanent: true,
      },
      {
        source: '/government-analytics-consutling/:path*',
        destination: '/government-analytics-consulting/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
