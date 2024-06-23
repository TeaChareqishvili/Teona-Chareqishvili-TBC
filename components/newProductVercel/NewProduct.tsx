"use client";
import { useState } from "react";
import Link from "next/link";
import { AddProductToCart } from "../productButtons/AddProductToCart";
import { VercelProduct, NewProductProps } from "../../app/[locale]/interface";
import { handleAddToCart } from "../../app/[locale]/actions";

export default function NewProduct({ product }: NewProductProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(product);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    const filtered = product.filter((p) =>
      p.category.toLowerCase().includes(suggestion.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const uniqueCategories = Array.from(new Set(product.map((p) => p.category)));

  return (
    <div className="container mx-auto p-4">
      <div className="relative mb-10">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by category"
          className="w-full p-4 border border-gray-300 rounded-md shadow-md"
        />
        {searchTerm && (
          <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto z-10">
            {uniqueCategories
              .filter((cat) =>
                cat.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((cat) => (
                <li
                  key={cat}
                  onClick={() => handleSelectSuggestion(cat)}
                  className="p-3 cursor-pointer hover:bg-gray-200"
                >
                  {cat}
                </li>
              ))}
          </ul>
        )}
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Categories</h2>
        <div className="flex flex-wrap gap-3">
          {uniqueCategories.map((cat) => (
            <div
              key={cat}
              onClick={() => handleSelectSuggestion(cat)}
              className="bg-blue-600 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-200"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product: VercelProduct) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-5 space-y-4 overflow-hidden transform transition-all duration-300 hover:scale-105"
          >
            <div
              className="w-full h-48 bg-cover bg-center mb-7 cursor-pointer"
              style={{ backgroundImage: `url(${product.imageurl})` }}
            ></div>
            <div className="h-1 w-7 bg-gray-500 mx-auto"></div>
            <p className="text-lg italic text-gray-500 hover:text-gray-700 hover:scale-110 tracking-wider py-5 text-center cursor-pointer transition-all duration-200 mt-4">
              {product.title}
            </p>
            <p className="text-black text-center">${product.price}</p>
            <Link
              className="block border border-gray-400 text-center w-full text-white mt-2 px-2 py-2 bg-green-700 rounded-md hover:bg-green-800 transition-colors duration-300"
              href={`/singleProductVercel/${product.id}`}
            >
              View Details
            </Link>
            <AddProductToCart
              productId={product.id}
              handleAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
