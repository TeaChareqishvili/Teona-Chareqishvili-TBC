import Image from "next/image";
import { useState, useRef } from "react";
import type { PutBlobResult } from "@vercel/blob";
import { DetailProductData } from "../../app/[locale]/interface";
import { editProduct } from "@/app/[locale]/actions";

export default function EditProductForm({
  id,
  productDetail,
}: {
  id: number;
  productDetail: DetailProductData;
}) {
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [title, setTitle] = useState(productDetail.title || "");
  const [description, setDescription] = useState(
    productDetail.description || ""
  );
  const [category, setCategory] = useState(productDetail.category || "");
  const [imageurl, setImageurl] = useState(productDetail.imageurl || "");
  const [stock, setStock] = useState(productDetail.stock || 0);
  const [price, setPrice] = useState(productDetail.price || "");
  const [sale, setSale] = useState(productDetail.sale || "");
  const [image_gallery, setImage_gallery] = useState(
    productDetail.image_gallery || []
  );

  console.log(setImageurl);
  // Create refs for each image input
  const inputFileRefs = useRef<(HTMLInputElement | null)[]>([]);

  const formData = {
    title,
    category,
    description,
    imageurl,
    stock,
    price,
    sale,
    image_gallery,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await editProduct(id, formData);
    } catch (error) {
      console.error(error);
    }
    // window.location.reload();
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
      setImage_gallery((prev) => {
        const updatedGallery = [...prev];
        updatedGallery[index] = newBlob.url;
        return updatedGallery;
      });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleImageClick = (index: number) => {
    if (inputFileRefs.current[index]) {
      inputFileRefs.current[index]?.click();
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
            {image_gallery.map((item, index) => (
              <div key={index}>
                <Image
                  width={100}
                  height={100}
                  src={item}
                  alt={`Product image ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                  className="cursor-pointer"
                />
                <input
                  type="file"
                  ref={(el: HTMLInputElement | null): void => {
                    inputFileRefs.current[index] = el;
                  }}
                  onChange={(e) => handleFileChange(e, index)}
                  style={{ display: "none" }}
                />
              </div>
            ))}
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="number"
              name="sale"
              placeholder="Sale"
              value={sale}
              onChange={(e) => setSale(e.target.value)}
            />
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <input
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {/* 
            <label className="mr-[15px] w-[120px] relative bg-[#76a58b] h-[40px] text-[#ffffff] flex items-center justify-center rounded hover:bg-[#748f80] transition duration-300">
              <input
                type="file"
                name="image_url"
                ref={(el) => (inputFileRefs.current[0] = el)} // ref for the main image upload
                onChange={(e) => handleFileChange(e, 0)} // Update the main image URL
              />
            </label> */}
          </div>
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
