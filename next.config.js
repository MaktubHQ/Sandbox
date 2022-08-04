/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/api/profileapplications',
//         destination: '/dejobs',
//         permanent: true,
//       },
//     ]
//   },
// }