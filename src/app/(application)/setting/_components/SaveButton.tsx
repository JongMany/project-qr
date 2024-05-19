"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function SaveButton() {
  const router = useRouter();
  const saveHandler = () => {
    alert("저장되었습니다");
    router.replace("/main");
  };
  return (
    <button
      className="mt-10 py-1 bg-black text-white px-6 rounded-lg"
      onClick={saveHandler}
    >
      저장
    </button>
  );
}
