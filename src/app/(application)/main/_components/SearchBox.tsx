"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <nav className="px-4 mb-2">
      <div className="relative flex items-center">
        <BiSearch className="absolute left-2 text-[22px] text-[#b8b8b9]" />
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={query}
          className="w-full py-2 px-8 bg-[#f2f2f2] rounded-xl"
        />
      </div>
    </nav>
  );
}
