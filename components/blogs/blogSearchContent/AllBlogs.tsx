"use client";

import Link from "next/link";
import { Blogs } from "@/app/[locale]/interface";
import { useState, useEffect } from "react";

interface AllBlogsProps {
  firstBlog: Blogs;
  blog: Blogs[];
}

export default function AllBlogs({ firstBlog, blog }: AllBlogsProps) {
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      day: "numeric",
      month: "long",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [date, setDate] = useState(false);

  useEffect(() => {
    setDate(true);
  }, []);
  const extractCategories = (blog: Blogs[]): string[] => {
    const categories = blog.map((blog) => blog.category);
    return ["All", ...Array.from(new Set(categories))];
  };

  const categories = extractCategories(blog);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === "All" ? null : category);
  };

  const filteredBlogs = selectedCategory
    ? blog.filter((blog) => blog.category === selectedCategory)
    : blog;

  console.log(filteredBlogs);
  return (
    <>
      <div className="mt-[30px] w-full ">
        <div className="tilt-in-fwd-tr lg:mr-[20px] w-full ">
          <div className=" w-full  overflow-hidden rounded-md h-[500px]  mb-[30px]">
            <div
              className="  w-full h-full  hover rounded-md cursor-pointer"
              style={{
                backgroundImage: `url(${firstBlog.image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>

          <h3 className="dark:text-white text-[18px] px-[10px] tracking-wide lg:px-0 uppercase lg:text-[22px] text-[#212A31]">
            {firstBlog.title}
          </h3>
          {date && (
            <span className="dark:text-white text-[15px] text-[#28333b] px-[10px] lg:px-0">
              {formatDate(firstBlog.date)}
            </span>
          )}

          <Link
            className=" ml-[20px] dark:text-white text-[15px] text-[#212A31] font-bold cursor-pointer"
            href={`/singleBlog/${firstBlog.id}`}
          >
            Read more
          </Link>
        </div>
      </div>
      <div className="w-full mt-[20px] px-4 lg:px-8 py-8 bg-gray-100 rounded-md flex flex-col items-center mb-[10px] lg:mb-0">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Search Category
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                selectedCategory === category
                  ? "dark:bg-[#124E66] bg-[#212A31] hover:bg-[#124E66] text-white "
                  : "dark:bg-[#2E3944] bg-[#748D92] hover:bg-[#2E3944] text-white"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className=" w-full flex items-center justify-center flex-wrap  cursor-pointer ">
        {filteredBlogs.map((blog: Blogs) => (
          <div
            key={blog.id}
            className="tilt-in-fwd-tr w-full flex flex-col items-center mb-[10px] lg:h-[400px] md:flex-row md:justify-center md:w-[450px]  m-auto md:mb-[10px] lg:mb-0"
          >
            {" "}
            <div className="w-full h-[300px] gap-1 relative card-container overflow-hidden md:w-full">
              <div
                className="flex flex-col items-center  h-[300px] w-full  rounded-md "
                style={{
                  backgroundImage: `url(${blog.image_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              <div className=" caption flex felx-col items-center justify-center">
                {" "}
                <p className="text-[18px] text-[white] w-full  text-center blog-category">
                  {blog.category}
                </p>
                <p className="text-[16px] text-[white] blog-title ">
                  {" "}
                  {blog.title}
                </p>
                <div className="blog-butons flex flex-col items-center justify-center">
                  {" "}
                  {date && (
                    <span className="text-[12px]">{formatDate(blog.date)}</span>
                  )}
                  <br></br>
                  <Link
                    className="text-white text-[16px] font-bold cursor-pointer"
                    href={`/singleBlog/${blog.id}`}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
