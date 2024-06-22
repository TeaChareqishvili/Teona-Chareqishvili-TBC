"use client";
import { DetailProductData } from "../../app/[locale]/interface";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
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
        <FaStar key={index + rating} className="text-gray-400" />
      ));
    return (
      <div className="flex">
        {yellowStars}
        {grayStars}
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center p-4 mt-20">
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-screen-lg p-6 rounded-lg bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-xl transform transition duration-500 hover:scale-105">
          <div className="md:col-span-1 flex flex-col items-center overflow-hidden">
            <div className="flex justify-center mb-4">{renderStars(rate)}</div>
            <h3 className="text-3xl mb-2 text-white font-bold">{data.title}</h3>
            <p className="text-lg mb-4 text-gray-400 italic">
              <strong className="font-semibold">Category: </strong>
              {data.category}
            </p>
            <div
              className="w-full h-[400px] bg-cover bg-center mb-4 rounded-md border-4 border-gray-600 shadow-lg"
              style={{ backgroundImage: `url(${data.imageurl})` }}
            />
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={3}
              className="w-full"
            >
              {img?.map((pic, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center"
                >
                  <div
                    className="w-[100px] h-[100px] bg-cover bg-center rounded-md transition-all duration-300 cursor-pointer border-2 border-gray-500"
                    style={{ backgroundImage: `url(${pic})` }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="md:col-span-1 flex flex-col text-white items-center space-y-4">
            <p className="text-lg tracking-widest">
              <strong className="font-bold">Description: </strong>
              {data.description}
            </p>
            <p className="text-xl">
              <strong className="font-bold">Price: </strong>${data.price}
            </p>
            <p className="text-xl">
              <strong className="font-bold">Sale: </strong>${data.sale}
            </p>
            <div className="flex flex-col items-center mt-6">
              <p className="text-lg font-semibold mb-4">
                Comments: {commentCount}
              </p>
              <RenderReviews validComments={validComments} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
