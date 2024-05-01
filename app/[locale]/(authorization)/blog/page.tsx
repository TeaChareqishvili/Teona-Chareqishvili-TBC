"use server";
import Image from "next/image";
import blogImage from "../../../../public/assets/image/blogImages/blog3.webp";
import Link from "next/link";
import { FetchedBlog } from "../../interface";

// function to fetch blogs
async function getBlog() {
  const response = await fetch("https://dummyjson.com/posts");
  const blogs: FetchedBlog = await response.json();
  return blogs.posts;
}
export default async function Blog() {
  const blogs = await getBlog();

  return (
    <div className="flex items-center justify-center flex-col md:flex-row md:flex-wrap p-4 mt-[60px]">
      {blogs.map((item) => (
        <div
          key={item.id}
          className="mx-auto my-8 w-full self-center md:w-auto"
        >
          <div className="w-full max-w-500 mx-auto object-cover cursor-pointer overflow-hidden md:p-10">
            {" "}
            <Image
              className="w-full h-auto object-cover transition duration-400 transform hover:scale-125"
              src={blogImage}
              alt={item.title}
              width="300"
              height="300"
            />
          </div>
          <div className="blog-content">
            <h2>{item.title}</h2>
            <Link href={`/singleBlog/${item.id}`}>
              {" "}
              <button>Read More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
