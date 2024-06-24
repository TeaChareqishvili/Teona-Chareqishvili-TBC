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
import AddReview from "../reviews/AddReview";

export default function ShareSocial({
  products,
  id,
}: {
  products: DetailProductData;
  id: string;
}) {
  const share = "https://teona-chareqishvili-tbc.vercel.app";
  return (
    <div className="w-full flex items-center justify-center mt-[20px] mb-[40px]">
      <FacebookShareButton
        url={`${share}/singleProductVercel/${products.id}`}
        title={products.title}
        className="mr-[15px] hover:scale-150 transition-all duration-200"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={`${share}/singleProductVercel/${products.id}`}
        title={products.title}
        className="mr-[15px] hover:scale-150 transition-all duration-200"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={`${share}/singleProductVercel/${products.id}`}
        title={products.title}
        className="mr-[15px] hover:scale-150 transition-all duration-200"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <AddReview id={id} />
    </div>
  );
}
