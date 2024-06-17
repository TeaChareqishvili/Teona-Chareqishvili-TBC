import Image from "next/image";
import { useState, useRef } from "react";
import type { PutBlobResult } from "@vercel/blob";
import { DetailProductData } from "../../app/[locale]/interface";
import { editProduct } from "@/app/[locale]/actions";

export default function EditProductForm({
  id,
  productDetail,
  handleModalClose,
}: {
  id: number;
  productDetail: DetailProductData[];
  handleModalClose: () => void;
}) {
  const detailedData = productDetail[0];

  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [title, setTitle] = useState(detailedData.title || "");
  const [description, setDescription] = useState(
    detailedData.description || ""
  );
  const [category, setCategory] = useState(detailedData.category || "");
  const [imageurl, setImageurl] = useState(detailedData.imageurl || "");

  const [price, setPrice] = useState(detailedData.price || "");
  const [sale, setSale] = useState(detailedData.sale || "");
  const [image_gallery, setImage_gallery] = useState(
    detailedData.image_gallery || []
  );

  console.log(setImageurl);

  // Create refs for each image input
  const inputFileRefs = useRef<(HTMLInputElement | null)[]>([]);

  const formData = {
    title,
    category,
    description,
    imageurl,
    price,
    sale,
    image_gallery,
  };

  console.log(formData, "formdata");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await editProduct(id, formData);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      handleModalClose();
    }, 500);
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
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

      // Update image_gallery with the new image URL

      if (index === -1) {
        // Update the main image URL
        setImageurl(newBlob.url);
      } else {
        // Update image_gallery with the new image URL
        setImage_gallery((prev) => {
          const updatedGallery = [...prev];
          updatedGallery[index] = newBlob.url;
          return updatedGallery;
        });
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleImageClick = (index: number) => {
    if (inputFileRefs.current[index]) {
      inputFileRefs.current[index]?.click();
    }
  };

  const handleMainImageClick = () => {
    if (inputFileRefs.current[0]) {
      inputFileRefs.current[0]?.click();
    }
  };
  return (
    <div className="flex justify-center items-center z-20 p-2">
      <form
        className="bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4 text-center">Upload Product</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {image_gallery.map((item, index) => (
            <div key={index} className="relative">
              <Image
                width={80}
                height={80}
                src={item}
                alt={`Product image ${index + 1}`}
                onClick={() => handleImageClick(index)}
                className="cursor-pointer border border-gray-300 rounded-md w-[80px] h-[80px]"
              />
              <input
                type="file"
                ref={(el) => {
                  inputFileRefs.current[index] = el;
                }}
                onChange={(e) => handleFileChange(e, index)}
                style={{ display: "none" }}
              />
            </div>
          ))}
          <div className="relative">
            <Image
              width={80}
              height={80}
              src={imageurl}
              alt="mainimg"
              onClick={() => handleMainImageClick()}
              className="cursor-pointer border border-gray-300 rounded-md w-[80px] h-[80px]"
            />
            <input
              type="file"
              ref={(el) => {
                inputFileRefs.current[0] = el;
              }}
              onChange={(e) => handleFileChange(e, -1)}
              style={{ display: "none" }}
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="text-[13px] text-[#1d273d]">
            Title
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-[#1d273d] text-[#1d273d] bg-transparent rounded-md outline-none"
            />
          </label>
          <label className="text-[13px] text-[#1d273d]">
            Price{" "}
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border border-[#1d273d] text-[#1d273d] bg-transparent rounded-md outline-none"
            />
          </label>
          <label className="text-[13px] text-[#1d273d]">
            Sale{" "}
            <input
              type="number"
              name="sale"
              placeholder="Sale"
              value={sale}
              onChange={(e) => setSale(e.target.value)}
              className="w-full p-2 border border-[#1d273d] text-[#1d273d] bg-transparent rounded-md outline-none"
            />
          </label>
          <label className="text-[13px] text-[#1d273d]">
            category{" "}
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-[#1d273d] text-[#1d273d] bg-transparent rounded-md outline-none"
            />
          </label>
        </div>

        <div className="mt-4">
          <label className="text-[13px] text-[#1d273d]">
            Category{" "}
            <textarea
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-[#1d273d] bg-transparent text-[#1d273d] rounded-md outline-none h-24"
            />
          </label>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="w-24 bg-[#1d273d] text-white py-2 rounded-md hover:bg-[#485f92] transition duration-300"
          >
            Upload
          </button>
        </div>
        {blob && (
          <div className="mt-4 text-center">
            Blob url:
            <Image
              src={blob.url}
              alt="blob"
              width={80}
              height={80}
              className="hidden ml-2"
            />
          </div>
        )}
      </form>
    </div>
  );
}
