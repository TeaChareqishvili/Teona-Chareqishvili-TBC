"use server";
import { getBlogs } from "@/apiUsers";
import { unstable_noStore as noStore } from "next/cache";
import AllBlogs from "@/components/blogs/blogSearchContent/AllBlogs";

export default async function Blog() {
  noStore();
  const blog = await getBlogs();

  const firstBlog = blog.rows[7];
  const blogData = blog.rows;

  return (
    <div className=" w-full flex flex-col items-start  bg-[#D3D9D4] dark:bg-[#2E3944] lg:p-[30px]">
      <AllBlogs firstBlog={firstBlog} blog={blogData} />
    </div>
  );
}
