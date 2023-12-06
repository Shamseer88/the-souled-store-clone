import { useState } from "react";
import "./Search.css";
import { useSearch } from "../../provider/SearchProvider";

export default function Search() {
  const { searchTerm, handleSearch } = useSearch();

  return (
    <div className="serach-bar">
      <input
        type="text"
        placeholder="Type here..."
        value={searchTerm}
        onChange={(e) => handleSearch(e)}
      />
      <button className="search-button">Search</button>
    </div>
  );
}
