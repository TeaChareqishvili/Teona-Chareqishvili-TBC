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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
      {
        protocol: "https",
        hostname: "2u0jumuukobkisgr.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "s.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "rdawkbs6qlsqqeww.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "rdawkbs6qlsqqewww.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "media.post.rvohealth.io",
        pathname: "/wp-content/uploads/sites/3/2020/02/325353_2200-732x549.jpg",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
});
