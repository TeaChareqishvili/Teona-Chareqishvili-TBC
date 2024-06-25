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
    "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/food-Ld4EJceoeEIDC1pQjhmRFqu47NU4z7.mp4";
  const group =
    "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/group-bKoHqiHzCbBGZapMDiDUg8tEcuUu2P.mp4";
  const muscle =
    "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/muscleGain-Z95MsIm5XiVcqOZiXRUtarjdJv9XQ3.mp4";
  const personal =
    "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/personal-f2JHKfdmnLmvZ98PJJhI1mtDxyL3Gx.mp4";
  const pool =
    "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/pool-1ONJIm6dwemEkueXQQEQBTr8kc3ANc.mp4";
  const spa =
    "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/spa-yMZAx5Bfc4aTxXsnE4Uh6ZeQ7DAVrc.mp4";
  const weight =
    "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/weight-6OtEu3TD1QODoYxfgcjWSc2s9mrkHk.mp4";
  const yoga =
    "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/yoga-OqpMaCJOpbhQRzb3CzVR6kSRUcb1Iy.mp4";

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
