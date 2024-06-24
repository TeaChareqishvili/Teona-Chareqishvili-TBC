"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import { createNewProduct } from "../../app/[locale]/actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";

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
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const validateInputs = () => {
    const newErrors: string[] = [];
    if (!title) newErrors.push("Title is required");
    if (!price || isNaN(Number(price)) || Number(price) <= 0)
      newErrors.push("Valid price is required");
    if (sale && (isNaN(Number(sale)) || Number(sale) < 0))
      newErrors.push("Valid sale value is required");
    if (!description) newErrors.push("Description is required");
    if (!category) newErrors.push("Category is required");
    if (!imageurl) newErrors.push("Main image is required");
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors([]);
    try {
      setIsLoading(true);
      await createNewProduct(formData);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        handleModalClose();
      }, 500);
    }
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number
  ) => {
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

    if (index === undefined) {
      // Main image
      setImageurl(newImageUrls[0]);
    } else {
      // Gallery image
      setImage_gallery((prev) => {
        const updatedGallery = [...prev];
        updatedGallery[index] = newImageUrls[0];
        return updatedGallery;
      });
    }
  };

  return (
    <div className="w-full min-h-[100px] bg-white flex flex-col items-center mt-4 p-4 rounded-md shadow-md">
      <h1 className="text-[#212A31] text-xl font-semibold">Add New Product</h1>
      <form className="w-full max-w-2xl mt-4 space-y-4" onSubmit={handleSubmit}>
        {errors.length > 0 && (
          <div className="w-full p-4 bg-red-100 text-red-700 rounded-md">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="w-full flex flex-wrap space-x-4">
          <div className="flex flex-col flex-1">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 mt-1 border bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#124E66] text-[#212A31]"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full p-2 mt-1 border bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#124E66] text-[#212A31]"
              min="0"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="block text-gray-700">Sale</label>
            <input
              type="number"
              name="sale"
              placeholder="Sale"
              value={sale}
              onChange={(e) => setSale(e.target.value)}
              className="w-full p-2 mt-1 border bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#124E66] text-[#212A31]"
              min="0"
            />
          </div>
        </div>
        <div className="w-full flex flex-wrap space-x-4">
          <div className="flex flex-col flex-1">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full p-2 mt-1 border bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#124E66] text-[#212A31]"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 mt-1 border bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#124E66] text-[#212A31]"
          />
        </div>
        <div className="w-full flex flex-row space-x-4">
          <div className="flex flex-col">
            <label className="block text-gray-700">Main Image</label>
            <label className="w-24 h-24 flex items-center justify-center border-2 border-dashed rounded-md cursor-pointer bg-gray-100 text-gray-500">
              <input
                type="file"
                name="image_url"
                ref={inputFileRef}
                onChange={(e) => handleFileChange(e)}
                className="hidden"
                required
              />
              {imageurl ? (
                <Image
                  src={imageurl}
                  alt="main image"
                  width={96}
                  height={96}
                  className="rounded-md"
                />
              ) : (
                <span>Choose file</span>
              )}
            </label>
          </div>
          <div className="flex flex-col">
            <label className="block text-gray-700">Gallery</label>
            <div className="flex flex-wrap gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <label
                  key={index}
                  className="w-24 h-24 flex items-center justify-center border-2 border-dashed rounded-md cursor-pointer bg-gray-100 text-gray-500"
                >
                  <input
                    type="file"
                    name={`image_gallery_${index}`}
                    onChange={(e) => handleFileChange(e, index)}
                    className="hidden"
                  />
                  {image_gallery[index] ? (
                    <Image
                      src={image_gallery[index]}
                      alt={`gallery ${index}`}
                      width={96}
                      height={96}
                      className="rounded-md"
                    />
                  ) : (
                    <span>Choose file</span>
                  )}
                </label>
              ))}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-[#124E66] flex items-center justify-center text-white rounded-md hover:bg-[#212A31] transition duration-300"
        >
          {isLoading ? <FaSpinner className="animate-spin mr-2" /> : "Upload"}
        </button>
      </form>
      {blob && ""}
    </div>
  );
};

export default ProductAddForm;
