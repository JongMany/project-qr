"use client";
import { Category, Item, ItemForm, categoryOptions } from "@/entity/Item";
import { useItemStore } from "@/stores/useItemStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ProductForm() {
  const { dispatch } = useItemStore();
  const router = useRouter();
  const submitProduct = async (formData: FormData) => {
    const form: Item = {
      name: formData.get("productName") as string,
      category: formData.get("category") as Category,
      expirationDate: formData.get("expirationDate") as string,
    };

    const result = ItemForm.safeParse(form);
    if (!result.success) {
      let errorMsg = "";
      result.error.errors.forEach((issue) => {
        errorMsg = errorMsg + issue.message + ".\n";
      });
      toast.error(errorMsg);
    } else {
      const image = formData.get("image") as File;
      dispatch({
        type: "registerItem",
        payload: {
          id: Math.random(),
          ...form,
          imageUrl: "https://via.placeholder.com/100",
          // imageUrl: image ? URL.createObjectURL(image) : "https://via.placeholder.com/100",
        },
      });
      router.replace("/main");
      // Cloudinary에 저장 후에 URL을 받아옴

      // 데이터 추가하는 로직 구현
      // try {
      //   await submitProduct(formData);
      // } catch (error) {
      //   console.error(error);
      //   toast.error("상품을 추가하는데 실패했습니다.");
      // }
    }
  };
  return (
    <>
      <form
        action={submitProduct}
        className="flex flex-col justify-center items-center px-2"
      >
        <div className="grid grid-cols-[1fr_2fr] gap-y-3">
          <label htmlFor="productName" className="font-bold text-[17px]">
            상품명
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="border-2 rounded-md border-gray-300 h-[30px] px-2 py-1"
          />
          <label htmlFor="category" className="font-bold text-[17px]">
            카테고리
          </label>
          <select
            id="category"
            name="category"
            className="border-2 rounded-md border-gray-300 h-[30px] px-2 py-1"
          >
            {categoryOptions.map((category) => (
              <option key={category.id} value={category.value}>
                {category.value}
              </option>
            ))}
          </select>
          <label htmlFor="expirationDate" className="font-bold text-[17px]">
            유통기한
          </label>
          <input
            type="date"
            id="expirationDate"
            name="expirationDate"
            className="border-2 rounded-md border-gray-300 h-[30px] px-2 py-1"
          />
          <label htmlFor="image" className="font-bold text-[17px]">
            이미지
          </label>
          <div>
            <input
              type="file"
              name="image"
              id="image"
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
    file:bg-gray-200 file:border-0
    file:me-4
    file:py-1 file:px-4
    "
            />
            <p
              className="mt-1 text-xs text-gray-500 dark:text-gray-300"
              id="image_help"
            >
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>
        </div>
        <button
          className="mt-10 py-1 rounded-xl w-[250px] bg-black text-white"
          type="submit"
        >
          제출
        </button>
      </form>
    </>
  );
}
