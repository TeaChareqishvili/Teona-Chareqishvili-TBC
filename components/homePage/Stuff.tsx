"use client";
import trainer1 from "../../public/assets/image/stuff/trainer1.webp";
import trainer2 from "../../public/assets/image/stuff/trainer2.webp";
import trainer3 from "../../public/assets/image/stuff/trainer3.webp";
import trainer4 from "../../public/assets/image/stuff/trainer4.webp";
import trainer5 from "../../public/assets/image/stuff/trainer5.webp";
import trainer6 from "../../public/assets/image/stuff/trainer6.webp";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/swiper-bundle.min.css";
import { Autoplay, Mousewheel, Keyboard } from "swiper/modules";

// SwiperCore.use([Autoplay, Mousewheel, Keyboard]);
const trainers = [
  {
    id: 1,
    img: trainer1,
    name: "Ella Lopez",
  },
  {
    id: 2,
    img: trainer2,
    name: "William Jones",
  },
  {
    id: 3,
    img: trainer3,
    name: "Lucas Davis",
  },
  {
    id: 4,
    img: trainer4,
    name: "Lily Anderson",
  },
  {
    id: 5,
    img: trainer5,
    name: "Sophia Brown",
  },
  {
    id: 6,
    img: trainer6,
    name: "Matthew Anderson",
  },
  {
    id: 7,
    img: trainer4,
    name: "Lily Anderson",
  },
  {
    id: 8,
    img: trainer2,
    name: "William Jones",
  },
  {
    id: 9,
    img: trainer1,
    name: "Ella Lopez",
  },
];

export default function Stuff() {
  return (
    <div className="bg-[#f4f6f3] py-[20px] dark:bg-white">
      <h2 className="text-center text-[34px] uppercase text-[#264653] my-[25px] mb-[40px] underline dark:text-[#1d273d] fade-in-out">
        Meet Our Stuff
      </h2>
      <Swiper
        slidesPerView="auto"
        className=" flex items-center justify-between overflow-hidden realtive"
        keyboard={true}
        pagination={true}
        modules={[Mousewheel, Keyboard, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        {trainers.map((item) => (
          <SwiperSlide
            key={item.id}
            className=" slide flex items-center justify-evenly  max-w-[300px]  w-full mr-[5px] cursor-pointer"
          >
            <Image
              className="w-full h-full object-cover rounded-md"
              src={item.img}
              alt="footer-img"
            />
            <div className="trainer flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full cursor-pointer">
              <p className="bg-[#1d273d] text-[#ffffff] p-[10px] rounded-md italic">
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
