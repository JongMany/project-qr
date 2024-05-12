import ItemContainer from "@/app/(application)/main/_components/ItemContainer";
// import MenuItems from "@/app/(application)/main/_components/MenuItems";
import SearchBox from "@/app/(application)/main/_components/SearchBox";
import React from "react";

export default function Page() {
  return (
    <div className="max-h-[100vh] h-[100vh]">
      <h1 className="font-bold text-[32px] pt-12 px-4 ">All Products</h1>
      <SearchBox />

      <ItemContainer />
      {/* <MenuItems /> */}
    </div>
  );
}
