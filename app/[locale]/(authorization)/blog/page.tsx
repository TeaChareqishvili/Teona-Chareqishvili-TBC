"use server";
import { getBlogs } from "@/apiUsers";
import Image from "next/image";
import { Blogs } from "../../interface";
export default async function Blog() {
  const blog = await getBlogs();

  return (
    <div className="flex items-center justify-center flex-col md:flex-row md:flex-wrap p-4 mt-[120px]">
      {blog.rows.map((blog: Blogs) => (
        <div key={blog.id} className="mt-[150px] text-[black]">
          <p> {blog.title}</p>
          <Image width={300} height={300} src={blog.image_url} alt="protin" />
        </div>
      ))}
    </div>
  );
}
