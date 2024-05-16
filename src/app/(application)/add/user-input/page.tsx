import ProductForm from "@/app/(application)/add/user-input/_components/ProductForm";
import { Category, Item, ItemForm } from "@/entity/Item";
import React from "react";

export default function page() {
  const submitProduct = async (formData: FormData) => {
    "use server";
    const form: Item = {
      name: formData.get("productName") as string,
      category: formData.get("category") as Category,
      expirationDate: formData.get("expirationDate") as string,
    };
    try {
      ItemForm.parse(form);
      // 데이터 추가하는 로직 구현
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <div className="px-4 py-8 flex flex-col justify-center h-[100vh] items-center">
      <h1 className="font-bold text-[22px] mb-8">수동으로 입력</h1>
      <ProductForm />
    </div>
  );
}
