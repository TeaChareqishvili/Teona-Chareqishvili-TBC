"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import { createNewProduct } from "../../app/[locale]/actions";
import Image from "next/image";

export default function ProductAddForm() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [sale, setSale] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [image_gallery, setImage_gallery] = useState<string[]>([]);

  const formData = {
    title,
    price,
    stock: parseInt(stock, 10),
    sale,
    description,
    category,
    imageurl,
    image_gallery,
  };
  console.log(formData, "formdata");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createNewProduct(formData);
    } catch (error) {
      console.error(error);
    }
    // window.location.reload();
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
      <h1 className="text-black text-xl font-semibold dark:text-white">hi</h1>
      <form
        className=" w-[50%] flex flex-col items-center mt-4"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <input
              type="number"
              name="sale"
              placeholder="Sale"
              value={sale}
              onChange={(e) => setSale(e.target.value)}
              required
            />
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />

            <input
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
            <label className="mr-[15px] w-[120px] relative bg-[#76a58b] h-[40px] text-[#ffffff] flex items-center justify-center rounded hover:bg-[#748f80] transition duration-300">
              <input
                type="file"
                name="image_gallery"
                ref={inputFileRef}
                onChange={handleFileChange}
                required
                multiple
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
