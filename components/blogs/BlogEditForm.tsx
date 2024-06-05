import { CreateBlogData } from "@/app/[locale]/interface";
import Image from "next/image";
import { useState, useRef } from "react";
import type { PutBlobResult } from "@vercel/blob";

export default function BlogEditForm({ blog }: { blog: CreateBlogData }) {
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  return (
    <div>
      <form className="flex flex-col items-center mt-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={blog.title}
                // onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={blog.category}
                // onChange={(e) => setCategory(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={blog.description}
                // onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
            <label className="mr-[15px] w-[120px] relative bg-[#76a58b] h-[40px] text-[#ffffff] flex items-center justify-center rounded hover:bg-[#748f80] transition duration-300">
              <input
                type="file"
                name="image_url"
                // ref={inputFileRef}
                // onChange={handleFileChange}
                required
              />
            </label>
          </div>
          {/* <label className="mr-[15px] w-[120px] relative bg-[#76a58b] h-[40px] text-[#ffffff] flex items-center justify-center rounded hover:bg-[#748f80] transition duration-300">
            choose image
            <input
              name="file"
              ref={inputFileRef}
              type="file"
              required
              className="absolute w-full h-full top-0 left-0 mb-4 p-2 border border-white rounded file:mr-5 file:py-1 file:px-3 file:border-[1px] file:text-xs file:font-small file:bg-stone-50 file:text-stone-700 hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-[#748f80] opacity-0"
            />
          </label> */}
          <button
            type="submit"
            className="w-[120px] bg-[#76a58b] flex items-center justify-center text-white px-4 py-2 rounded hover:bg-[#748f80] transition duration-300"
          >
            upload
          </button>
        </div>

        {blob && (
          <div>
            Blob url:{" "}
            <Image src={blob.url} alt="blog" width={100} height={100} />
          </div>
        )}
      </form>
    </div>
  );
}
