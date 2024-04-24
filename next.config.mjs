/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
