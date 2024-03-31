import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { productData } from "../projectData";

// debounce function which sets and clears timeout
const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

const SearchForProduct = ({ filteredProducts, setFilteredProducts }) => {
  const [search, setSearch] = useState("");

  // function get input value and calls new function with the new value
  const handleChange = (event) => {
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
  const filterProducts = (value) => {
    if (value !== "") {
      const filtered = productData.filter((product) =>
        product.category.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className="search-wrapper">
      <div style={{ width: "200px" }}>
        {" "}
        {filteredProducts.length > 0 && (
          <span className="item-number">
            {filteredProducts.length} items in stock are available
          </span>
        )}
      </div>

      <div className="search">
        <label className="search-label">
          <input
            className="search-input"
            type="search"
            placeholder="Search Category"
            value={search}
            onChange={handleChange}
          />
          <ImSearch className="search-icon" />
        </label>
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export { SearchForProduct };
