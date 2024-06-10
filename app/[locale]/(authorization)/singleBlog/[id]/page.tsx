"use server";
import SingleBlogDetails from "@/components/blogs/SingleBlogDetails";

import { getBlogDetail } from "../../../../../apiUsers";

export default async function SingleBlog({
  params: { id },
}: {
  params: { id: string };
}) {
  const singleBlog = await getBlogDetail(id);

  return (
    <div className="w-full h-full">
      <SingleBlogDetails singleBlog={singleBlog} />
    </div>
  );
}
