"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import { createNewProduct } from "../../app/[locale]/actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface modalCloseProp {
  handleModalClose: () => void;
}
const ProductAddForm: React.FC<modalCloseProp> = ({ handleModalClose }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const [sale, setSale] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [image_gallery, setImage_gallery] = useState<string[]>([]);

  const router = useRouter();

  console.log(setBlob);
  const formData = {
    title,
    price,
    sale,
    description,
    category,
    imageurl,
    image_gallery,
  };
  console.log(formData, "formdataadd");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createNewProduct(formData);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        handleModalClose();
      }, 500);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      throw new Error("No file selected");
    }

    const files = e.target.files;
    const newImageUrls: any = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      try {
        const response = await fetch(`/api/upload?filename=${file.name}`, {
          method: "POST",
          body: file,
        });

        const newBlob = await response.json();
        console.log("File uploaded successfully:", newBlob);

        newImageUrls.push(newBlob.url);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }

    setImageurl(newImageUrls[0]); // Set the first image as the main image URL
    setImage_gallery((prev) => [...prev, ...newImageUrls]);
  };

  return (
    <div className="w-full min-h-[100px] bg-[#cfe1d8] flex flex-col items-center mt-4 p-4 rounded-md dark:bg-[#527361]">
      <h1 className="text-black text-xl font-semibold dark:text-white">
        Add New Product
      </h1>
      <form
        className="w-full max-w-2xl  mt-4 space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex flex-wrap space-x-4">
          <div className="flex flex-col flex-1">
            <label className="block text-gray-700 dark:text-white">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#527361]"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="block text-gray-700 dark:text-white">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#527361]"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="block text-gray-700 dark:text-white">Sale</label>
            <input
              type="number"
              name="sale"
              placeholder="Sale"
              value={sale}
              onChange={(e) => setSale(e.target.value)}
              required
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#527361]"
            />
          </div>
        </div>
        <div className="w-full flex flex-wrap space-x-4">
          <div className="flex flex-col flex-1">
            <label className="block text-gray-700 dark:text-white">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#527361]"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="block text-gray-700 dark:text-white">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#527361]"
          />
        </div>
        <div className="w-full">
          <label className="block text-gray-700 dark:text-white">Image</label>
          <label className="w-full h-32 flex items-center justify-center border-2 border-dashed rounded-md cursor-pointer bg-gray-100 dark:bg-[#cfe1d8] text-gray-500">
            <input
              type="file"
              name="image_url"
              ref={inputFileRef}
              onChange={handleFileChange}
              className="hidden"
              required
            />
            <span>Choose file</span>
          </label>
          {blob && (
            <div className="mt-2 flex justify-center">
              <Image
                src={blob.url}
                alt="product"
                width={100}
                height={100}
                className="rounded-md"
              />
            </div>
          )}
        </div>
        <div className="w-full">
          <label className="block text-gray-700 dark:text-white">Gallery</label>
          <div className="flex flex-wrap gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <label
                key={index}
                className="w-24 h-24 flex items-center justify-center border-2 border-dashed rounded-md cursor-pointer bg-gray-100 dark:bg-[#cfe1d8] text-gray-500"
              >
                <input
                  type="file"
                  name={`image_gallery_${index}`}
                  onChange={handleFileChange}
                  className="hidden"
                />
                <span>Choose file</span>
              </label>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {image_gallery.map((url, index) => (
              <Image
                key={index}
                src={url}
                alt={`gallery ${index}`}
                width={50}
                height={50}
                className="rounded-md"
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-[#76a58b] text-white rounded-md hover:bg-[#748f80] transition duration-300"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ProductAddForm;
