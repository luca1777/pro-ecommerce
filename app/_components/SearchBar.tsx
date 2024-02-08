"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    const encodedSearchQuery = encodeURI(query);
    router.push(`/search?q=${encodedSearchQuery}`);
  };

  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-black placeholder:text-gray-500"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">
        <div className="absolute right-0 top-0 mr-3 flex h-full items-center text-gray-500 text-sm">
          <FaSearch />
        </div>
      </button>
    </form>
  );
};

export default SearchBar;
