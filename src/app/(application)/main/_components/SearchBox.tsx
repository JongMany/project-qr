"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <nav className="px-4 mb-2 min-h-[6vh] h-[6vh]">
      <div className="relative flex items-center">
        <BiSearch className="absolute left-2 text-[22px] text-[#b8b8b9]" />
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={query}
          className="w-full py-2 px-8 bg-[#f2f2f2] rounded-xl"
        />
        <button className="px-2 py-1 rounded-lg min-w-[50px] font-semibold">
          검색
        </button>
      </div>
    </nav>
  );
}
