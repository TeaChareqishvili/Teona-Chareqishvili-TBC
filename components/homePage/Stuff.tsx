// import trainer1 from "../../public/assets/image/stuff/trainer1.webp";
// import trainer2 from "../../public/assets/image/stuff/trainer2.webp";
// import trainer3 from "../../public/assets/image/stuff/trainer3.webp";
// import trainer4 from "../../public/assets/image/stuff/trainer4.webp";
// import trainer5 from "../../public/assets/image/stuff/trainer5.webp";
// import trainer6 from "../../public/assets/image/stuff/trainer6.webp";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// const trainers = [
//   {
//     id: 1,
//     img: trainer1,
//     name: "Ella Lopez",
//   },
//   {
//     id: 2,
//     img: trainer2,
//     name: "William Jones",
//   },
//   {
//     id: 3,
//     img: trainer3,
//     name: "Lucas Davis",
//   },
//   {
//     id: 4,
//     img: trainer4,
//     name: "Lily Anderson",
//   },
//   {
//     id: 5,
//     img: trainer5,
//     name: "Sophia Brown",
//   },
//   {
//     id: 6,
//     img: trainer6,
//     name: "Matthew Anderson",
//   },
// ];

export default function Stuff() {
  return (
    <div>
      <Swiper
        slidesPerView="auto"
        className=" flex items-center justify-between overflow-hidden realtive"
      >
        {trainers.map((item) => (
          <SwiperSlide
            key={item.id}
            className=" slide flex items-center justify-evenly overflow-hidden max-w-[240px] w-full mr-[5px] cursor-pointer"
          >
            <Image width={250} height={250} src={item.img} alt="footer-img" />
            <div className="cover flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full cursor-pointer"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
