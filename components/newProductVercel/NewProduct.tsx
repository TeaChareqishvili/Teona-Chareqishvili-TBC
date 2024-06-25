"use client";
import { useState } from "react";
import Link from "next/link";
import { AddProductToCart } from "../productButtons/AddProductToCart";
import { VercelProduct, NewProductProps } from "../../app/[locale]/interface";
import { handleAddToCart } from "../../app/[locale]/actions";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function NewProduct({ product }: NewProductProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(product);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const { user } = useUser();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowSuggestions(true);
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    if (query) {
      const filtered = product.filter((p) =>
        p.category.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(product);
    }
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    const filtered = product.filter((p) =>
      p.category.toLowerCase().includes(suggestion.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const uniqueCategories = Array.from(new Set(product.map((p) => p.category)));

  return (
    <div className="container mx-auto p-4 mb-[50px]">
      <div className="relative mb-10">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by category"
          style={{ outlineColor: "white" }}
          className="w-full p-4 border text-white dark:border-[#212A31]  dark:bg-[#212A31] bg-[#748D92] rounded-md shadow-md"
        />
        {searchTerm && showSuggestions && (
          <ul className="absolute left-0 right-0 bg-white border  border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto z-10">
            {uniqueCategories
              .filter((cat) =>
                cat.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((cat) => (
                <li
                  key={cat}
                  onClick={() => handleSelectSuggestion(cat)}
                  className="p-3 cursor-pointer hover:bg-gray-200 text-black"
                >
                  {cat}
                </li>
              ))}
          </ul>
        )}
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Categories</h2>
        <div className="flex flex-wrap gap-3">
          {uniqueCategories.map((cat) => (
            <div
              key={cat}
              onClick={() => handleSelectSuggestion(cat)}
              className="dark:bg-[#124E66] bg-[#748D92] hover:bg-[#314b56]  text-white px-4 py-2 rounded-full cursor-pointer dark:hover:bg-[#314b56] transition duration-200"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {filteredProducts.map((product: VercelProduct) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-5 space-y-4 overflow-hidden transform transition-all duration-300 hover:scale-105"
          >
            <div
              className="w-full h-[250px] bg-cover bg-center  cursor-pointer"
              style={{
                backgroundImage: `url(${product.imageurl})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="h-1 w-7 bg-gray-500 mx-auto"></div>
            <p className="text-lg italic text-gray-500 hover:text-gray-700 hover:scale-110 tracking-wider py-5 text-center cursor-pointer transition-all duration-200 ">
              {product.title}
            </p>
            <p className="text-black text-center">${product.price}</p>
            <div className="flex flex-col items-center justify-center">
              {" "}
              <Link
                className="px-4 py-2 uppercase mb-[15px] bg-[#2E3944] text-white rounded-md hover:bg-[#171d23] dark:bg-[#D3D9D4] dark:text-[#2E3944] dark:hover:bg-[#748D92] dark:hover:text-white transition"
                href={`/singleProductVercel/${product.id}`}
              >
                View Details
              </Link>
              {user && (
                <AddProductToCart
                  productId={product.id}
                  handleAddToCart={handleAddToCart}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
