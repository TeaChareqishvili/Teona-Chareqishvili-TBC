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
    "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/food-QaVlw0KeX9bkLIliX1lFSr4J6Nu3K0.mp4";
  const group =
    "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/group-NuexT8gZ4XlBdXwXluKcSNr5VFhUzr.mp4";
  const muscle =
    "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/muscleGain-DSfLcbPrfc7yDpnLkivMNtGMFXzITC.mp4";
  const personal =
    "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/personal-dNeUHzHVEtx6Q6w1zkUgfXf5F4Koa4.mp4";
  const pool =
    "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/pool-sjZHnSZwgssMzOmAuLy5s96XakwYPy.mp4";
  const spa =
    "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/spa-Kts9N5t5CDrqGEwj46Msv9aYJrFOBe.mp4";
  const weight =
    "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/weight-uf1Y9CldKKQIbzKXeW6gZh6Tidyk1o.mp4";
  const yoga =
    "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/yoga-Dw7bylulYMzk5mqwdaJsl9yVbfudWR.mp4";

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
              playsInline
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
