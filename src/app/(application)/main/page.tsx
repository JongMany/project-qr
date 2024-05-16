import FilterOption from "@/app/(application)/main/_components/FilterOption";
import ItemContainer from "@/app/(application)/main/_components/ItemContainer";
import ItemList from "@/app/(application)/main/_components/ItemList";
// import MenuItems from "@/app/(application)/main/_components/MenuItems";
import SearchBox from "@/app/(application)/main/_components/SearchBox";
import React from "react";

export default function Page() {
  return (
    <div className="max-h-[100vh] h-[100vh]">
      <h1 className="font-bold text-[32px] pt-2 px-4 max-h-[8vh] h-[8vh]">
        All Products
      </h1>
      {/* <SearchBox /> */}
      {/* <FilterOption /> */}
      {/* <ItemContainer /> */}
      <ItemList />
      {/* <MenuItems /> */}
    </div>
  );
}
