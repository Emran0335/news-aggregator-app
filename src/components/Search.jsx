import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="mr-32 w-[60%] text-black">
      <label htmlFor="search-input" className="flex items-center relative">
        <FaSearch className="absolute left-3 text-black h-4 w-4" />
        <input type="text" id="search-input" className="w-full rounded-md py-1 px-8 outline-none" placeholder="Search the content"/>
        <button className="absolute text-black right-0 border h-full rounded-l-0 rounded-tr-md rounded-br-md px-2 border-l-1">
          Search
        </button>
      </label>
    </div>
  );
}

export default Search;
