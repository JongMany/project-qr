"use client";
import Item from "@/app/(application)/main/_components/Item";
import React, { useReducer, useState } from "react";

const fakeItems = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/100",
    name: "요구르트",
    category: "식품(유제품)",
    expirationDate: "2024-5-10",
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/100",
    name: "라면",
    category: "식품(가공식품)",
    expirationDate: "2025-5-12",
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/100",
    name: "마요네즈",
    category: "식품(소스류)",
    expirationDate: "2024-12-31",
  },
  {
    id: 4,
    imageUrl: "https://via.placeholder.com/100",
    name: "마스카라",
    category: "화장품",
    expirationDate: "2026-12-31",
  },
  {
    id: 5,
    imageUrl: "https://via.placeholder.com/100",
    name: "마데카솔",
    category: "의약품",
    expirationDate: "2026-12-31",
  },
  {
    id: 6,
    imageUrl: "https://via.placeholder.com/100",
    name: "마데카솔",
    category: "의약품",
    expirationDate: "2026-12-31",
  },
];

const itemReducer = (state: typeof fakeItems, action: any) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default function ItemContainer() {
  const [items, dispatch] = useReducer(itemReducer, fakeItems);
  const deleteItemById = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  return (
    <section className="max-h-[78vh] overflow-y-scroll scrollbar-hide flex flex-col items-center pb-4">
      {items.map((item) => (
        <Item key={item.id} item={item} deleteItemById={deleteItemById} />
      ))}
    </section>
  );
}
