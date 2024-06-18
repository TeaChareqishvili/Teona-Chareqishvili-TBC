"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import { createNewBlog } from "../../app/[locale]/actions";

import { useRouter } from "next/navigation";

export default function BlogAddForm() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image_url, setImage_url] = useState("");

  console.log(blob);
  // TODO blob
  const router = useRouter();
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
      router.refresh();
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
    <div className="w-full min-h-[100px] bg-[#cfe1d8] flex flex-col items-center mt-4 p-4 rounded-md dark:bg-white">
      <h1 className="text-xl font-semibold text-[#212A31]">Add New Blog</h1>
      <form
        className="flex flex-col items-center mt-4 space-y-4 w-full"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <label className="block text-[#212A31] dark:text-white">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 mt-1 border border-[#212A31] dark:text-[#212A31] rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-[##212A31]"
          />
        </div>
        <div className="w-full">
          <label className="block text-[#212A31] dark:text-white">
            Category
          </label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full p-2 mt-1 border bg-transparent border-[#212A31] dark:text-[#212A31] rounded-md focus:outline-none focus:ring-2 focus:ring-[#212A31]"
          />
        </div>
        <div className="w-full">
          <label className="block text-[#212A31] dark:text-white">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 mt-1 border border-[#212A31] bg-transparent dark:text-[#212A31] rounded-md focus:outline-none focus:ring-2 focus:ring-[#212A31]"
          />
        </div>
        <div className="w-full">
          <label className="block  text-[#5e686f] ">Image</label>
          <label
            style={{
              backgroundImage: image_url ? `url(${image_url})` : "none",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="w-full h-32 flex items-center justify-center border-2 border-dashed rounded-md cursor-pointer bg-gray-100 dark:bg-[#f6f6f7] text-[#212A31]"
          >
            <input
              type="file"
              name="image_url"
              ref={inputFileRef}
              onChange={handleFileChange}
              className="hidden"
              required
            />
            {!image_url && <span>Choose file</span>}
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-[#212A31] text-white rounded-md hover:bg-[#4d6272] transition duration-300"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
