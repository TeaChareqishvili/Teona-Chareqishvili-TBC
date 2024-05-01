"use server";

import blogImage from "../../../../public/assets/image/blogImages/blog3.webp";
import Image from "next/image";
import { FetchedBlog, Blog } from "../../../interface";

// function to generate static blog id
export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts");
  const blog: FetchedBlog = await response.json();

  const paths = blog.posts.map((post) => ({
    id: `${post.id}`,
  }));

  return paths;
}

// function to fetch single blog id
async function getBlog(id: string) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const blog = await response.json();
  return blog;
}

export default async function SingleBlog({ params }: Blog) {
  const { id } = params;
  const blog: Blog = await getBlog(id);

  return (
    <div className="w-4/5 flex items-center flex-col justify-center my-[20px] mx-auto">
      <div className="my-[15px]">
        {" "}
        {blog.tags.map((tag, index) => (
          <span key={index}> # {tag} </span>
        ))}
      </div>

      <div className="mr-[20px] my-[10px]">
        <Image src={blogImage} alt="blog" width="300" height="300" />
      </div>
      <div>
        <p className="text-lg text-gray-700 font-bold">{blog.title}....</p>
        <p>{blog.body}</p>
      </div>
      <span className="text-lg text-gray-700 font-bold">
        {" "}
        Reactions:{blog.reactions}
      </span>
    </div>
  );
}
