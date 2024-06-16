"use client";
import { DetailProductData } from "../../app/[locale]/interface";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import RenderReviews from "./RenderReviews";

interface Reviews {
  email: string;
  serial_id: number;
  rating: number;
  comment: string;
  product_id: string;
}
type SingleProductProps = {
  img: string[];
  product: DetailProductData[];
  reviews: Reviews[];
};

export default function SingleProduct({
  img,
  product,
  reviews,
}: SingleProductProps) {
  const data = product[0];
  const length = reviews.length;
  const lastReview = reviews[length - 1];
  const rate = lastReview ? lastReview.rating : 0;
  const validComments = reviews.filter(
    (review) => review.comment.trim() !== ""
  );

  const commentCount = validComments.length;

  const renderStars = (rating: number) => {
    const yellowStars = Array(rating)
      .fill(0)
      .map((_, index) => <FaStar key={index} className="text-yellow-500" />);
    const grayStars = Array(5 - rating)
      .fill(0)
      .map((_, index) => (
        <FaStar key={index + rating} className="text-green" />
      ));
    return (
      <div className="flex">
        {yellowStars}
        {grayStars}
      </div>
    );
  };
  return (
    <div className="w-full flex justify-center p-4 bg-gray-800 mt-[80px]">
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full  bg-gray-900 p-6 rounded-lg">
          <div className="md:col-span-1 flex flex-col items-center overflow-hidden">
            <div className="flex justify-center mb-4">{renderStars(rate)}</div>
            <h3 className="text-2xl mb-2 text-white">{data.title}</h3>
            <p className="text-lg mb-4 text-gray-300">
              <strong className="font-bold">Category: </strong>
              {data.category}
            </p>
            <Image
              src={data.imageurl}
              alt="productimg"
              width={400}
              height={400}
              layout="responsive"
              className="mb-4 rounded-md"
            />
            <Swiper
              slidesPerView="auto"
              className="  flex items-center justify-between  "
            >
              {img?.map((pic, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center "
                >
                  <div
                    className="w-[100px] h-[100px] bg-cover bg-center rounded-md hover:scale-150 transition-all duration-200 cursor-pointer"
                    style={{ backgroundImage: `url(${pic})` }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="md:col-span-1 flex flex-col text-white items-center">
            <p className="mb-2 tracking-widest">
              <strong>Description: </strong>
              {data.description}
            </p>
            <p className="mb-2">
              <strong>Price: </strong>${data.price}
            </p>
            <p className="mb-2">
              <strong>Sale: </strong>${data.sale}
            </p>
            <div className="flex flex-col items-center">
              {" "}
              <p className="mb-4">Comments: {commentCount}</p>
              <RenderReviews validComments={validComments} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
