"use client";

import { SingleBlogData } from "@/app/[locale]/interface";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

interface ShareBlogsProps {
  singleBlog: SingleBlogData;
}
export default function ShareBlogs({ singleBlog }: ShareBlogsProps) {
  const share = "https://teona-chareqishvili-tbc.vercel.app";
  return (
    <div className="w-full flex items-center justify-center mb-[20px]">
      <FacebookShareButton
        url={`${share}/singleBlog/${singleBlog.id}`}
        title={singleBlog.title}
        className="mr-[5px]"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={`${share}/singleBlog/${singleBlog.id}`}
        title={singleBlog.title}
        className="mr-[5px]"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={`${share}/singleBlog/${singleBlog.id}`}
        title={singleBlog.title}
        className="mr-[5px]"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
}
