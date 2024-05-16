"use client";

import { useSearchContext } from "@/app/(application)/main/_components/ItemList";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBox() {
  const [value, setValue] = useState("");
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const { changeQuery } = useSearchContext();

  return (
    <nav className="px-4 mb-2 min-h-[4vh] h-[4vh]">
      <div className="relative flex items-center">
        <BiSearch className="absolute left-2 text-[22px] text-[#b8b8b9]" />
        <input
          type="text"
          placeholder="Search"
          onChange={handleChangeValue}
          value={value}
          className="w-full py-2 px-8 bg-[#f2f2f2] rounded-xl"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              changeQuery(value)();
            }
          }}
        />
        <button
          className="px-2 py-1 rounded-lg min-w-[50px] font-semibold"
          onClick={changeQuery(value)}
        >
          검색
        </button>
      </div>
    </nav>
  );
}
