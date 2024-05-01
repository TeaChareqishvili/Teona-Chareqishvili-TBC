"use client";

import { ImSearch } from "react-icons/im";
import { useState } from "react";

import { SearchForProductProps } from "../../app/[locale]/interface";

// debounce function which sets and clears timeout

type FunctionType = (...args: any[]) => any;

const debounce = (func: FunctionType, delay: number): FunctionType => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeout as ReturnType<typeof setTimeout>);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const SearchForProduct: React.FC<SearchForProductProps> = ({
  filteredProducts,
  setFilteredProducts,
  setSorted,
  productItems,
}) => {
  const [search, setSearch] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  // function get input value and calls new function with the new value
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    debouncedFilterProducts(value);
  };

  /* calls debounce function which wraps final result for filtered items 
  and delays its execution for some ms */

  const debouncedFilterProducts = debounce((value) => {
    filterProducts(value);
  }, 300);

  // function to filter the data form productData
  const filterProducts = (value: string | number) => {
    if (value !== "") {
      // Convert value to a string if it's not already one
      const stringValue = value.toString().toLowerCase();

      const filtered = productItems.filter((product) =>
        product.category.toLowerCase().includes(stringValue)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  // function to sort products according price
  const handleSort = () => {
    setIsSorted(!isSorted);
    if (filteredProducts.length > 0) {
      const sortedProducts = [...filteredProducts].sort(
        (a, b) => a.price - b.price
      );
      if (isSorted) {
        setFilteredProducts([]);
        setSearch("");
      } else {
        setFilteredProducts(sortedProducts);
      }
    } else {
      const sortedProducts = [...productItems].sort(
        (a, b) => a.price - b.price
      );
      if (isSorted) {
        setSorted(productItems);
      } else {
        setSorted(sortedProducts);
      }
    }
  };

  return (
    <div className="search-wrapper">
      <div style={{ width: "200px" }}>
        {" "}
        {filteredProducts.length > 0 && (
          <span className="item-number">
            {filteredProducts.length} items are available in store
          </span>
        )}
      </div>

      <div className="flex items-center">
        <label className="flex items-center relative">
          <input
            className="w-[200px] p-[10px] outline-none text-[#3AA2A2] font-lg search-input rounded-tl-lg rounded-bl-lg"
            type="search"
            placeholder="Search Category"
            value={search}
            onChange={handleChange}
          />
          <ImSearch className="absolute top-4 right-2 text-[#3AA2A2]" />
        </label>
        <button
          className="bg-[#3AA2A2] h-[44px] w-[130px] p-[7px] cursor-pointer text-white font-lg rounded-tr-lg rounded-br-lg"
          onClick={handleSort}
        >
          {isSorted ? "Reset" : "Sort"}
        </button>
      </div>
    </div>
  );
};

export { SearchForProduct };
