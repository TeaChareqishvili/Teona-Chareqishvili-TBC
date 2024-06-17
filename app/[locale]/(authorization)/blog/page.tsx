"use server";
import { getBlogs } from "@/apiUsers";
import Image from "next/image";
import { Blogs } from "../../interface";
import Link from "next/link";

// import BlogCategoryList from "@/components/blogs/blogSearchContent/BlogCategoryList";

export default async function Blog() {
  const blog = await getBlogs();

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const firtsBlog = blog.rows[7];

  // const category = blog.rows.map((blog) => blog.category);

  // console.log(category, "blog??");

  return (
    <div className=" w-full flex flex-col items-start bg-[#f4f6f3] dark:bg-[#14252d] p-[50px]">
      <div className="w-[40%] mt-[120px] ">
        <div className="overflow-hidden rounded-md ">
          <Image
            src={firtsBlog.image_url}
            alt="blog"
            width={150}
            height={150}
            className="w-full rounded-md hover cursor-pointer mb-[30px]"
          />
        </div>

        <h3 className="dark:text-white text-[22px] text-[#264653]">
          {firtsBlog.title}
        </h3>
        <p className="dark:text-white text-[18px] text-[#264653]">
          {firtsBlog.category}
        </p>
        <span className="dark:text-white text-[15px] text-[#264653]">
          {formatDate(firtsBlog.date)}
        </span>
        <Link
          className="ml-[20px] dark:text-white text-[15px] text-[#264653] font-bold cursor-pointer"
          href={`/singleBlog/${blog.id}`}
        >
          Read more
        </Link>
      </div>
      <div className="flex items-center justify-between flex-wrap mt-[20px] cursor-pointer">
        {blog.rows.map((blog: Blogs) => (
          <div
            key={blog.id}
            className="flex flex-col items-center mb-[20px] h-[400px]"
          >
            {" "}
            <div className="w-[300px] h-[300px] relative card-container overflow-hidden">
              <div
                className="flex flex-col items-center mb-[20px] h-[300px] w-[300px]  rounded-md"
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
                <div className="blog-butons">
                  {" "}
                  <span className="text-[12px]">{formatDate(blog.date)}</span>
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

      {/* <BlogCategoryList category={category} /> */}
    </div>
  );
}
