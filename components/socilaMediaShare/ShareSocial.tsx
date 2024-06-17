"use client";
import { DetailProductData } from "../../app/[locale]/interface";
import { Host } from "../../apiUsers";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
export default function ShareSocial({
  products,
}: {
  products: DetailProductData;
}) {
  console.log(products, "share");
  const share = "https://teona-chareqishvili-tbc.vercel.app";
  return (
    <div className="w-full flex items-center justify-center">
      <FacebookShareButton
        url={`${share}/singleProductVercel/${products.id}`}
        title={products.title}
        className="mr-[5px]"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={`${share}/singleProductVercel/${products.id}`}
        title={products.title}
        className="mr-[5px]"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={`${share}/singleProductVercel/${products.id}`}
        title={products.title}
        className="mr-[5px]"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
}
