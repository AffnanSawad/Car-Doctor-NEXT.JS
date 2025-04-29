/** @type {import('next').NextConfig} */
const nextConfig = {
// for images
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },



};

export default nextConfig;
