import SingleBlogDetails from "@/components/blogs/SingleBlogDetails";
import { getBlogDetail, getBlogs } from "../../../../../apiUsers";
import { Blogs } from "@/app/[locale]/interface";
// import { unstable_noStore as noStore } from "next/cache";
import ShareBlogs from "@/components/socilaMediaShare/ShareBlogs";

export const dynamic = "force-static";
export async function generateMetadata({ params }: any) {
  const blogData = await getBlogs();
  const blog = blogData.rows.find((blog: Blogs) => blog.id == params.id);

  // noStore();
  return {
    title: `${blog.title}`,
    description: `${blog.description}`,
  };
}

export default async function SingleBlog({
  params: { id },
}: {
  params: { id: string };
}) {
  const singleBlog = await getBlogDetail(id);

  return (
    <div className="w-full min-h-screen mt-[50px]">
      <SingleBlogDetails singleBlog={singleBlog} />
      <ShareBlogs singleBlog={singleBlog} />
    </div>
  );
}
