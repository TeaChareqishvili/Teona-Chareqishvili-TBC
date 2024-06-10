import { CreateBlogData } from "@/app/[locale]/interface";
import Image from "next/image";
import { useState, useRef } from "react";
import type { PutBlobResult } from "@vercel/blob";

import { editBlog } from "@/app/[locale]/actions";

export default function BlogEditForm({
  blog,
  id,
}: {
  id: number;
  blog: CreateBlogData;
}) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [title, setTitle] = useState(blog.title || "");
  const [description, setDescription] = useState(blog.description || "");
  const [category, setCategory] = useState(blog.category || "");
  const [image_url, setImage_url] = useState(blog.image_url || "");

  const formData = {
    title,
    category,
    description,
    image_url,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await editBlog(id, formData);
    } catch (error) {
      console.error(error);
    }
    // window.location.reload();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      throw new Error("No file selected");
    }

    const file = e.target.files[0];

    try {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      const newBlob = await response.json();
      console.log("File uploaded successfully:", newBlob);

      setBlob(newBlob);
      console.log(newBlob.url);
      setImage_url(newBlob.url);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div>
      <form
        className="flex flex-col items-center mt-4 bg-[black]"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <input
              className="text-black"
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <input
              className="text-black"
              type="text"
              name="category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />

            <input
              className="text-black"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <label className="mr-[15px] w-[120px] relative bg-[#76a58b] h-[40px] text-[#ffffff] flex items-center justify-center rounded hover:bg-[#748f80] transition duration-300">
              <input
                type="file"
                name="image_url"
                ref={inputFileRef}
                onChange={handleFileChange}
                required
              />
            </label>
            <Image width={200} height={200} src={image_url} alt="imageblog" />
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
