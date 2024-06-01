"use server";
import Image from "next/image";
import { getBlogs } from "@/apiUsers";
import { Blogs } from "@/app/[locale]/interface";
import Link from "next/link";
export default async function Articles() {
  const homeBlog = await getBlogs();
  const selectedBlogs = homeBlog.rows.slice(4, 7);

  return (
    <div className="w-full bg-[#f4f6f3] flex flex-col items-center justify-center py-[40px] px-[30px] lg:justify-between dark:bg-[#264653]">
      <Link
        href="/blog"
        className="text-center text-[34px] uppercase text-[#264653] my-[25px] underline cursor-pointer "
      >
        Latest Blogs
      </Link>
      <div className=" w-full flex flex-wrap items-center justify-center gap-4 p-4 lg:justify-between lg:w-4/5">
        {selectedBlogs.map((item: Blogs) => (
          <div
            key={item.id}
            className=" max-w-xs bg-white shadow-lg rounded-lg p-5  space-y-4 overflow-hidden mb-[40px]"
          >
            <Link
              href="/blog"
              className="flex flex-col items-center justify-center"
            >
              {" "}
              <Image
                width={330}
                height={330}
                src={item.image_url}
                alt={`Article ${item.id}`}
                className=" hover mb-[30px] cursor-pointer"
              />
              <div className="h-[1px] w-[30px] bg-[#747775]"></div>
              <p className="text-[16px] italic text-[#747775] hover:text-[#454645] hover:scale-110 tracking-wider py-[20px] text-center cursor-pointer transition-all duration-200">
                {item.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
