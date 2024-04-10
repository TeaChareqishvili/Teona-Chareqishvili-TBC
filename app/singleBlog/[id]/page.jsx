"use client";

import { useState, useEffect } from "react";
import blogImage from "../../../public/assets/image/blogImages/blog3.webp";
import Image from "next/image";
import { Loading } from "../../../components/Loading";

const SingleBlog = ({ params }) => {
  const [singleBlog, setSingleBlog] = useState({});
  const [loader, setLoader] = useState(true);

  // fetches single blog
  useEffect(() => {
    async function getSingleBlog() {
      const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
      const data = await res.json();
      setSingleBlog(data);
      setLoader(false);
    }
    getSingleBlog();
  }, []);

  // if no data loader is  rendered
  if (loader) return <Loading />;

  return (
    <div className="w-4/5 flex items-center flex-col justify-center my-[20px] mx-auto">
      <div className="my-[15px]">
        {" "}
        {singleBlog.tags.map((tag, index) => (
          <span key={index}> # {tag} </span>
        ))}
      </div>

      <div className="mr-[20px] my-[10px]">
        <Image src={blogImage} alt="blog" width="auoto" height="auto" />
      </div>
      <div>
        <p className="text-lg text-gray-700 font-bold">
          {singleBlog.title}....
        </p>
        <p>{singleBlog.body}</p>
      </div>
      <span className="text-lg text-gray-700 font-bold">
        {" "}
        Reactions:{singleBlog.reactions}
      </span>
    </div>
  );
};

export default SingleBlog;
