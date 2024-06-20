"use client";
import { useScopedI18n } from "@/locales/client";

import Link from "next/link";
interface Item {
  id: number;
  video: string;
  title: string;
  path: string;
}

export default function Offer() {
  const t = useScopedI18n("offers");

  const food =
    "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/food-nOy9VXPWEK5ddc61jG2wm5ekqoFMBY.mp4";
  const group =
    "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/group-q8HQhoIUPkK0aDc0tqapbA7xTR6QkB.mp4";
  const muscle =
    "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/muscleGain-W9XoXW8OaTqPJTm69dzsV95px6Do5y.mp4";
  const personal =
    "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/personal-5Whmc7eRltNN9sLzNicJKzCB30d0e1.mp4";
  const pool =
    " https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/pool-q74F8NFU6ngXQYiWGQYtTjGeHw9Swg.mp4";
  const spa =
    "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/spa-1IeAlkOqu3KwAESg4Z1f38nsiolsoY.mp4";
  const weight =
    "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/weight-NhPhrK614rAKZBOmgXCQQIxwJY7Br1.mp4";
  const yoga =
    "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/yoga-h6kiBcF6JyHeR8GVDBYIEPN6Q9vkAB.mp4";

  const offers: Item[] = [
    {
      id: 1,
      video: pool,
      title: t("pool"),
      path: "/pool",
    },
    {
      id: 2,
      video: weight,
      title: t("weight"),
      path: "/looseWeight",
    },
    {
      id: 3,
      video: personal,
      title: t("trainer"),
      path: "/personalTrainer",
    },
    {
      id: 4,
      video: muscle,
      title: t("muscle"),
      path: "/muscleGain",
    },
    {
      id: 5,
      video: yoga,
      title: t("yoga"),
      path: "/yoga",
    },
    {
      id: 6,
      video: group,
      title: t("group"),
      path: "/groupExercise",
    },
    {
      id: 7,
      video: spa,
      title: t("spa"),
      path: "/spa",
    },
    {
      id: 8,
      video: food,
      title: t("cafe"),
      path: "/caffee",
    },
  ];

  return (
    <div className="w-full bg-[#D3D9D4] dark:bg-[#2E3944] py-[30px]">
      <h2 className="text-center text-[24px] md:text-[30px] lg:text-[34px] uppercase text-[#264653] dark:text-[white] lg:my-[25px] lg:mb-[20px]  tracking-widest offers">
        {t("offer")}
      </h2>
      <div className=" w-full m-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-2 py-[30px]">
        {offers.map((item) => (
          <div
            key={item.id}
            className=" offers relative rounded-md cursor-pointer"
          >
            <video
              className="rounded-md"
              src={item.video}
              autoPlay
              muted
              loop
            />
            <div className="cover absolute top-0 left-0 w-full h-full rounded-md flex flex-col items-center justify-center">
              {" "}
              <p className="text-[28px] text-[#ffffff] tracking-wider">
                {item.title}
              </p>
              <Link
                className="text-[18px] tracking-widest text-[#ffffff] font-bold hover:text-[18px] transition-all duration-200 mt-[7px] mb-[7px]"
                href={item.path}
              >
                {t("seemore")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
