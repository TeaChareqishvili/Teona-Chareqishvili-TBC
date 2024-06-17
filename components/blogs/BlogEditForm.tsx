"use client";
import { CreateBlogData } from "@/app/[locale]/interface";
import Image from "next/image";
import { useState, useRef } from "react";
import type { PutBlobResult } from "@vercel/blob";
import { useRouter } from "next/navigation";

import { editBlog } from "@/app/[locale]/actions";

export default function BlogEditForm({
  blog,
  id,
  handleModalClose,
}: {
  id: number;
  blog: CreateBlogData;
  handleModalClose: () => void;
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
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await editBlog(id, formData);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
    handleModalClose();
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
    <div className="w-full p-4 bg-white rounded-lg">
      <h2 className="text-xl font-semibold text-center mb-4">Edit Blog</h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label className="text-[#1d273d] font-medium">Title</label>
          <input
            className="mt-1 p-1 bg-transparent text-[#1d273d] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d273d]"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#1d273d] font-medium">Category</label>
          <input
            className="mt-1 p-1 bg-transparent text-[#1d273d] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d273d]"
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="text-[#1d273d] font-medium">Description</label>
          <textarea
            className="mt-1 p-1 border bg-transparent text-[#1d273d] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d273d] h-20"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="text-gray-700 font-medium">Image</label>
          <label className="flex items-center justify-center w-full h-24 bg-gray-100 border border-dashed border-gray-300 rounded-md cursor-pointer">
            <input
              type="file"
              name="image_url"
              ref={inputFileRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <span className="text-[#1d273d]">Choose file</span>
          </label>
          {image_url && (
            <div className="mt-2 flex justify-center">
              <Image
                width={200}
                height={200}
                src={image_url}
                alt="Blog Image"
                className="rounded-md"
              />
            </div>
          )}
        </div>

        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="w-full md:w-1/4 py-2 bg-[#1d273d] text-white font-semibold rounded-md hover:bg-[#a4161a] transition duration-300"
          >
            Upload
          </button>
        </div>

        {blob && (
          <div className="md:col-span-2 mt-2 text-center">
            <span className="block text-gray-700">Blob URL:</span>
            <Image
              src={blob.url}
              alt="Blob Image"
              width={100}
              height={100}
              className="inline-block rounded-md"
            />
          </div>
        )}
      </form>
    </div>
  );
}
