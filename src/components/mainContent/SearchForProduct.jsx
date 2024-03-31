import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { productData } from "../projectData";

const SearchForProduct = ({ filteredProducts, setFilteredProducts }) => {
  const [search, setSearch] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState([]);

  const handleChange = (value) => {
    setSearch(value);
    filterProducts(value);
  };

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

  console.log("search", search);
  console.log("filteredProducts", filteredProducts);

  return (
    <div className="search-wrapper">
      <label className="search-label">
        <input
          className="search-input"
          type="search"
          placeholder="Search Category"
          value={search}
          onChange={(e) => handleChange(e.target.value)}
        />
        <ImSearch className="search-icon" />
      </label>
      <button className="search-btn">Search</button>
    </div>
  );
};

export { SearchForProduct };
