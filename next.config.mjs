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
      {
        protocol: "https",
        hostname: "www.proteini.si",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/I/**",
      },
      {
        protocol: "https",
        hostname: "ab9vg7azdm14stpx.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "geopelie.com",
      },
      {
        protocol: "https",
        hostname: "cdn-prod.medicalnewstoday.com",
      },
      {
        protocol: "https",
        hostname: "kingkongfitness.com.au",
      },
      {
        protocol: "https",
        hostname: "media.veli.store",
      },
      {
        protocol: "https",
        hostname: "www.bodyworld.eu",
        pathname: "/media/**",
      },

      {
        protocol: "https",
        hostname: " media.post.rvohealth.io",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "media.self.com",
      },
      {
        protocol: "https",
        hostname: "blog.nasm.org",
      },
      {
        protocol: "https",
        hostname: "tvpca3wafgomkw7i.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "www.myfoxbag.com",
      },
      {
        protocol: "https",
        hostname: "www.strideeurope.com",
      },
      {
        protocol: "https",
        hostname: "i5.walmartimages.com",
      },
      {
        protocol: "https",
        hostname: "fuelled.in",
      },
      {
        protocol: "https",
        hostname: "snappytowels.com",
      },
      {
        protocol: "https",
        hostname: "www.power-systems.com",
      },
      {
        protocol: "https",
        hostname: "cdn.staticans.com",
      },
      {
        protocol: "https",
        hostname: "rspnutrition.com",
      },
      {
        protocol: "https",
        hostname: "images.puma.com",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
});
