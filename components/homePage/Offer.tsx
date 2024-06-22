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
    "https://live.staticflickr.com/video/53808038960/e6aa4f8a0a/1080p.mp4?s=eyJpIjo1MzgwODAzODk2MCwiZSI6MTcxOTA0NDY3MywicyI6ImE4MjA1YWE0ZTZiM2E0OTY3M2M3NzQ3YTlhN2UzMWRjMTYyMGM4MWIiLCJ2IjoxfQ";
  const group =
    "https://live.staticflickr.com/video/53807642071/8d7a2cb60b/1080p.mp4?s=eyJpIjo1MzgwNzY0MjA3MSwiZSI6MTcxOTA0Njk5MywicyI6IjBlNzhjMDUxYjI3Nzk0ZDkyYzEwNTEwNThiNDE0M2VlMmQzZjc5N2MiLCJ2IjoxfQ";
  const muscle =
    "https://live.staticflickr.com/video/53807647656/3744494e6a/1080p.mp4?s=eyJpIjo1MzgwNzY0NzY1NiwiZSI6MTcxOTA0NzMyNiwicyI6ImI0MDhkYzg5YzllMWRkOGEzNmM1MDc0ZWJhMzA2ODA0ZDI1ZjU2MjEiLCJ2IjoxfQ";
  const personal =
    "https://live.staticflickr.com/video/53807600741/9e6e34d4a0/1080p.mp4?s=eyJpIjo1MzgwNzYwMDc0MSwiZSI6MTcxOTA0NDgzMCwicyI6IjY0Y2JmOTRjNWU3MGFiM2U0YzcwMDliODAwN2Q3ODE3MjIyMDdkNGIiLCJ2IjoxfQ";
  const pool =
    "https://live.staticflickr.com/video/53807646216/0717956750/1080p.mp4?s=eyJpIjo1MzgwNzY0NjIxNiwiZSI6MTcxOTA0NzIxMywicyI6IjNkMWU0OTAzMjAxMmU5M2NjYzUyYzdlZTI2N2VkNzY0YjU1MzI2MDkiLCJ2IjoxfQ";
  const spa =
    "https://live.staticflickr.com/video/53807888993/40158b3f62/1080p.mp4?s=eyJpIjo1MzgwNzg4ODk5MywiZSI6MTcxOTA0NzE4MywicyI6IjI5YWJhZDQzZTZkOWMwYzQyM2FlMTk4OWZmYjc2MGQzMWRiN2Y5YmUiLCJ2IjoxfQ";
  const weight =
    "https://live.staticflickr.com/video/53808062925/b2dfd6d307/1080p.mp4?s=eyJpIjo1MzgwODA2MjkyNSwiZSI6MTcxOTA0NTk0OCwicyI6IjM3YzU2ZmUyMzc4ODIxM2Q0YjJhN2I5MDU5MzgwZWE4ZTU0NjcwNWMiLCJ2IjoxfQ";
  const yoga =
    "https://live.staticflickr.com/video/53807642436/76f9b90e29/1080p.mp4?s=eyJpIjo1MzgwNzY0MjQzNiwiZSI6MTcxOTA0NzEwMiwicyI6ImI0NmQ4NzdkMzYzMzRhNDFmMzFlMTg4OTAwMDIwOTJjZDZmNTMyODEiLCJ2IjoxfQ";

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
