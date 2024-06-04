"use server";
import { getBlogs } from "@/apiUsers";
import Image from "next/image";
import { Blogs } from "../../interface";
import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";
export default async function Blog() {
  const blog = await getBlogs();

  const session = await getSession();

  const isAdmin =
    Array.isArray(session?.user?.role) && session.user.role.includes("admin");

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center flex-col md:flex-row md:flex-wrap p-4 mt-[120px]">
        {blog.rows.map((blog: Blogs) => (
          <div
            key={blog.id}
            className="mt-[150px] text-[black] border border-slate-700 flex flex-col items-center p-[30px]"
          >
            <Image width={300} height={300} src={blog.image_url} alt="protin" />
            <p> {blog.title}</p>
            <p>{blog.category}</p>
            <span>{blog.date}</span>
            <Link href={`/singleBlog/${blog.id}`}>Read more</Link>
          </div>
        ))}
      </div>
      {isAdmin && (
        <Link href="#" className="text-[black] text-[30px] mt-[130px]">
          add new blog
        </Link>
      )}
    </div>
  );
}
