"use client";
import { DetailProductData } from "../../app/[locale]/interface";
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
  return (
    <>
      <FacebookShareButton url={products.imageurl} title={products.title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={products.imageurl} title={products.title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={products.imageurl} title={products.title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </>
  );
}
