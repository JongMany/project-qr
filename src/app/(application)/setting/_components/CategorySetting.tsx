"use client";
import DeleteItemModal from "@/app/(application)/main/_components/modal/DeleteItemModal";
import { categoryOptions } from "@/entity/Item";
import { useModal } from "@/libs/useModal";
import { useCategoryStore } from "@/stores/useCategoryStore";
import React, { useState } from "react";

export default function CategorySetting() {
  const [value, setValue] = useState("");
  const { category, addCategory, deleteCategory } = useCategoryStore();
  const defaultCategory = categoryOptions.map((option) => option.id);
  const { closeModal, isOpen, openModal } = useModal();

  return (
    <div>
      <p className="text-[14px] text-center font-semibold text-red-400 mb-4">
        기본 카테고리(5개)는 삭제하실 수 없습니다
      </p>
      <ul className="flex flex-col gap-y-2 mb-6">
        {category.map((category) => (
          <li key={category.id} className="text-[18px] flex justify-between">
            <span className="">{category.value}</span>
            {defaultCategory.includes(category.id) ? null : (
              <span>
                <button
                  onClick={openModal}
                  className="bg-red-500 text-white px-2 rounded-md"
                >
                  삭제
                </button>
                {isOpen && (
                  <DeleteItemModal
                    closeModal={closeModal}
                    deleteItem={() => {
                      deleteCategory({
                        value: category.value,
                        id: category.id,
                      });
                      closeModal();
                    }}
                  />
                )}
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className="flex gap-x-2 text-[18px]">
        <input
          className="px-3 rounded-md border-4 border-black"
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
          className="rounded-md bg-black text-white px-4"
        >
          추가
        </button>
      </div>
    </div>
  );
}
