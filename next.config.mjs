/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["cdn.dummyjson.com"],
//   },
//   compiler: {
//     styledComponents: true,
//   },
// };

// export default nextConfig;

import nextVideos from "next-videos";

export default nextVideos({
  images: {
    domains: ["cdn.dummyjson.com"],
  },
  compiler: {
    styledComponents: true,
  },
});
