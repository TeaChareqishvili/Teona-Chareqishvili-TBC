import { ImSearch } from "react-icons/im";

const SearchForProduct = () => {
  return (
    <div className="search-wrapper">
      <label className="search-label">
        <input className="search-input" type="search" placeholder="Search" />
        <ImSearch className="search-icon" />
      </label>
      <button className="search-btn">Search</button>
    </div>
  );
};

export { SearchForProduct };
