"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef, use } from "react";
import { createNewBlog } from "../../app/[locale]/actions";
import Image from "next/image";

export default function BlogAddForm() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image_url, setImage_url] = useState("");

  const formData = {
    title,
    category,
    description,
    image_url,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createNewBlog(formData);
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
    <div className="w-full min-h-[100px] bg-[#cfe1d8] flex flex-col items-center mt-4 p-4 rounded-md dark:bg-[#527361]">
      <h1 className="text-black text-xl font-semibold dark:text-white">hi</h1>
      <form className="flex flex-col items-center mt-4" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
            <label className="mr-[15px] w-[120px] relative bg-[#76a58b] h-[40px] text-[#ffffff] flex items-center justify-center rounded hover:bg-[#748f80] transition duration-300">
              <input
                type="file"
                name="image_url"
                ref={inputFileRef}
                onChange={handleFileChange}
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
