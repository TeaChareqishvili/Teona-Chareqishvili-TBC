"use client";

import Link from "next/link";
import { Blogs } from "@/app/[locale]/interface";
import { useState, useEffect, use } from "react";

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
      <div className="mt-[80px] w-full lg:w-full m-auto flex flex-col items-center lg:items-start justify-center lg:justify-between lg:flex-row">
        <div className="tilt-in-fwd-tr lg:mr-[20px] w-full ">
          <div className=" w-full md:w-full overflow-hidden rounded-md h-[500px] lg:w-[700px] mb-[30px]">
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
            <span className="dark:text-white text-[15px] text-[#28333b]">
              {formatDate(firstBlog.date)}
            </span>
          )}

          <Link
            className=" ml-[20px] dark:text-white text-[15px] text-[#212A31] font-bold cursor-pointer"
            href={`/singleBlog/${blog.id}`}
          >
            Read more
          </Link>
        </div>
        <div className=" w-[90%] mt-[20px] mb-[20px] lg:mb-0 lg:mt-0 flex flex-col items-center justify-center px-[30px] py-[40px] bg-gray-100 rounded-lg shadow-md lg:w-[30%]">
          <h2 className="text-xl font-semibold mb-4 text-[#212A31]">
            Search Category
          </h2>
          <div className="flex flex-col items-center space-y-2 w-full ">
            {categories.map((category) => (
              <button
                key={category}
                className="cursor-pointer text-white w-full lg:w-[200px] uppercase tracking-widest hover:text-[#212A31] bg-[#212A31] border border-[#212A31] hover:bg-[#D3D9D4] px-4 py-2 rounded transition-all duration-200 ease-in-out"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
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
