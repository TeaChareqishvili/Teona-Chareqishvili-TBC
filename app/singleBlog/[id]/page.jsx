"use client";

import { useState, useEffect } from "react";

const SingleBlog = ({ params }) => {
  const [singleBlog, setSingleBlog] = useState({});

  useEffect(() => {
    async function getSingleBlog() {
      const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
      const data = await res.json();
      setSingleBlog(data);
    }
    getSingleBlog();
  }, []);

  console.log(singleBlog, "single blog");
  return <div>helolo</div>;
};

export default SingleBlog;
