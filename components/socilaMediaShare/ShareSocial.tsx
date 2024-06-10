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
    <>
      <FacebookShareButton
        url={`${share}/singleProductVercel/${products.id}`}
        title={products.title}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={`${share}/singleProductVercel/${products.id}`}
        title={products.title}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={`${share}/singleProductVercel/${products.id}`}
        title={products.title}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </>
  );
}
