"use client";
import { categoryOptions } from "@/entity/Item";
import { useCategoryStore } from "@/stores/useCategoryStore";
import React, { useState } from "react";

export default function CategorySetting() {
  const [value, setValue] = useState("");
  const { category, addCategory, deleteCategory } = useCategoryStore();
  const defaultCategory = categoryOptions.map((option) => option.id);
  return (
    <div>
      <ul className="flex flex-col gap-y-2 mb-6">
        {category.map((category) => (
          <li key={category.id} className="text-[18px] flex justify-between">
            <span className="">{category.value}</span>
            {defaultCategory.includes(category.id) ? null : (
              <span>
                <button
                  onClick={() => {
                    deleteCategory({ value: category.value, id: category.id });
                  }}
                  className="text-red-500"
                >
                  삭제
                </button>
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className="flex gap-x-2 text-[18px]">
        <input
          className="px-4 py-1 rounded-md border-4 border-black"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <button
          onClick={() => {
            if (value.length === 0) {
              alert("카테고리를 입력해주세요.");
              return;
            }
            if (category.some((c) => c.value === value)) {
              alert("이미 있는 카테고리입니다.");
              return;
            }
            addCategory({ value });
            setValue("");
          }}
          className="rounded-md bg-black text-white px-4 py-1"
        >
          추가
        </button>
      </div>
    </div>
  );
}
