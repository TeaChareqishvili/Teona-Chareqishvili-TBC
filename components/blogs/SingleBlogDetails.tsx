"use client";
import Image from "next/image";
import Link from "next/link";
import { SingleBlogData } from "../../app/[locale]/interface";
import { useUser } from "@auth0/nextjs-auth0/client";
import { EditBlog } from "./EditBlog";
export default function SingleBlogDetails({
  singleBlog,
}: {
  singleBlog: SingleBlogData;
}) {
  const { user } = useUser();

  const isAdmin = Array.isArray(user?.role) && user.role.includes("admin");
  return (
    <>
      <div
        key={singleBlog.id}
        className=" p-[40px] flex flex-col mt-[120px] w-4/5 items-center h-full justify-center"
      >
        <Image
          width={300}
          height={300}
          src={singleBlog.image_url}
          alt="blog-img"
        />
        <h1>{singleBlog.title}</h1>
        <p>{singleBlog.description}</p>
        {isAdmin && (
          <div className="flex flex-col ">
            <Link href="#"> EDIT </Link> <Link href="#">DELETE BLOG</Link>
            <EditBlog id={singleBlog.id} blog={singleBlog} />
          </div>
        )}
      </div>
    </>
  );
}
