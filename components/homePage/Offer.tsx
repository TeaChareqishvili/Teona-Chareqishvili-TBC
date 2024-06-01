"use client";
import { useScopedI18n } from "@/locales/client";
import pool from "../../public/assets/image/offers/pool.webp";
import spa from "../../public/assets/image/offers/spa.webp";
import weight from "../../public/assets/image/offers/weight.webp";
import muscle from "../../public/assets/image/offers/muscle.webp";
import group from "../../public/assets/image/offers/groupclasees.webp";
import personal from "../../public/assets/image/offers/trainer.webp";
import yoga from "../../public/assets/image/offers/yoga.webp";
import cafe from "../../public/assets/image/offers/cafe.webp";
import Image from "next/image";
import Link from "next/link";

export default function Offer() {
  const t = useScopedI18n("offers");

  const offers = [
    {
      id: 1,
      img: pool,
      title: t("pool"),
    },
    {
      id: 2,
      img: weight,
      title: t("weight"),
    },
    {
      id: 3,
      img: personal,
      title: t("trainer"),
    },
    {
      id: 4,
      img: muscle,
      title: t("muscle"),
    },
    {
      id: 5,
      img: yoga,
      title: t("yoga"),
    },
    {
      id: 6,
      img: group,
      title: t("group"),
    },
    {
      id: 7,
      img: spa,
      title: t("spa"),
    },
    {
      id: 8,
      img: cafe,
      title: t("cafe"),
    },
  ];

  return (
    <div className="w-full bg-[#f4f6f3] py-[30px]">
      <h2 className="text-center text-[34px] uppercase text-[#264653] my-[25px] mb-[20px]">
        What We Offer
      </h2>
      <div className=" w-4/5 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-[30px]">
        {offers.map((item) => (
          <div
            key={item.id}
            className=" offers relative rounded-md cursor-pointer"
          >
            <Image
              className="w-full h-full rounded-md object-fill"
              width={400}
              height={400}
              src={item.img}
              alt={item.title}
            />
            <div className="cover absolute top-0 left-0 w-full h-full rounded-md flex flex-col items-center justify-center">
              {" "}
              <p className="text-[20px] text-[#ffffff]">{item.title}</p>
              <Link
                className="text-[15px] text-[#ffffff] font-bold hover:text-[18px] transition-all duration-200 mt-[7px] mb-[7px]"
                href="#"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
