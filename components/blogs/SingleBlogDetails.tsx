"use server";
import { SingleBlogData } from "../../app/[locale]/interface";
import { getSession } from "@auth0/nextjs-auth0";
import { EditBlog } from "./EditBlog";
export default async function SingleBlogDetails({
  singleBlog,
}: {
  singleBlog: SingleBlogData;
}) {
  const session = await getSession();

  const isAdmin =
    Array.isArray(session?.user.role) && session?.user.role.includes("admin");

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <>
      <div
        key={singleBlog.id}
        className="w-full px-[20px] py-[40px] flex flex-col lg:flex-row lg:items-start lg:justify-between"
      >
        <div className="w-full lg:w-1/2 overflow-hidden rounded-md transition-all duration-200">
          <div
            className="w-full h-[500px] mb-[20px] lg:mb-0 rounded-md hover:scale-125 transition-all duration-200"
            style={{
              backgroundImage: `url(${singleBlog.image_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="flex flex-col items-center lg:w-2/5">
          <h1 className="text-white text-[22px] mb-[15px] lg:text-[26px]">
            {singleBlog.title}
          </h1>
          <p className="text-[#ebebeb] text-[16px] mb-[15px] lg:text-[18px]">
            {singleBlog.description}
          </p>
          <p className="text-[12px] text-[#d3d3d3] lg:text-[15px]">
            <i className="text-[12px] mr-[5px] lg:text-[15px]">Added On:</i>
            {formatDate(singleBlog.date)}
          </p>
          {isAdmin && (
            <div className="flex flex-col ">
              <EditBlog id={singleBlog.id} blog={singleBlog} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
