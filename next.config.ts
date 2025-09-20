/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds - allows deployment to proceed
    ignoreDuringBuilds: true,
  },
  // Optional: Also disable TypeScript errors if needed
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
}

module.exports = nextConfig