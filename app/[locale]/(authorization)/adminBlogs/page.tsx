"use server";
import { getBlogs } from "@/apiUsers";
import { Blogs } from "../../interface";
import Link from "next/link";
import { AddNewBlog } from "../../../../components/blogs/AddNewBlog";
import BlogDeleteBtn from "@/components/blogs/BlogDeleteBtn";

export default async function Blog() {
  const blog = await getBlogs();

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  console.log(blog, "blogsmain");
  const firstBlog = blog.rows[0];
  console.log(firstBlog, "first");

  return (
    <div className="container mx-auto p-4 bg-[#f4f6f3] dark:bg-[#356375] mt-[100px] mb-[50px]">
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-[#212A31] border border-gray-300 dark:border-gray-700 shadow-md rounded-lg">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-4 border-b dark:border-gray-700 text-left">
                Title
              </th>
              <th className="p-4 border-b dark:border-gray-700 text-left">
                Category
              </th>
              <th className="p-4 border-b dark:border-gray-700 text-left">
                Date
              </th>
              <th className="p-4 border-b dark:border-gray-700 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blog.rows.map((blog: Blogs) => (
              <tr
                key={blog.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="p-4 border-b dark:border-gray-700 text-gray-900 dark:text-gray-100">
                  {blog.title}
                </td>
                <td className="p-4 border-b dark:border-gray-700 text-gray-900 dark:text-gray-100">
                  {blog.category}
                </td>
                <td className="p-4 border-b dark:border-gray-700 text-gray-900 dark:text-gray-100">
                  {formatDate(blog.date)}
                </td>
                <td className="p-4 border-b dark:border-gray-700 text-center">
                  <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 justify-center items-center">
                    <Link
                      className="dark:text-[#2E3944] uppercase text-white px-4 py-2 bg-[#2E3944] dark:bg-[#D3D9D4] rounded-md hover:bg-[#517191] dark:hover:bg-[#a6aba7] transition-colors duration-200"
                      href={`/singleBlog/${blog.id}`}
                    >
                      Details
                    </Link>
                    <BlogDeleteBtn id={blog.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 w-full flex items-center justify-center">
        <AddNewBlog />
      </div>
    </div>
  );
}
