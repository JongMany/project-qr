"use client";
import { Category, categoryOptions } from "@/entity/Item";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { useItemStore } from "@/stores/useItemStore";
import React, { useState } from "react";

// 옵션: 만료기한 / 가나다순 / 최신순
export default function FilterOption() {
  const {
    expirationSortOption,
    toggleExpirationSortOption,
    selectCategoryFilter,
  } = useItemStore();

  const changeCategoryFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectCategoryFilter(e.target.value as Category | "전체");
  };

  const { category } = useCategoryStore();

  return (
    <nav className="min-h-[4vh] flex gap-x-5 px-4 items-center">
      <div>
        <button
          name="sort"
          id="expiration"
          onClick={toggleExpirationSortOption}
          className="flex gap-x-1"
        >
          <span>만료기한</span>
          <span>{expirationSortOption === "ascending" ? "⏶" : "⏷"}</span>
        </button>
      </div>
      <div>
        {/* TODO: 특정카테고리만 보여지도록 */}
        <select name="filter-category" onChange={changeCategoryFilter}>
          <option value="전체">전체</option>
          {/* {categoryOptions.map((option) => ( */}
          {category.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
          <option></option>
        </select>
      </div>
    </nav>
  );
}
