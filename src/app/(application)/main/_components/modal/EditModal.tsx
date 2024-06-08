import { ItemEntity, categoryOptions } from "@/entity/Item";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { useItemStore } from "@/stores/useItemStore";
import dayjs from "dayjs";
import { ChangeEvent, useState } from "react";

type Props = {
  closeModal: () => void;
  itemId: string;
};

export default function EditModal({ closeModal, itemId }: Props) {
  const { dispatch, items } = useItemStore();
  const [selectedItem, setSelectedItem] = useState(() =>
    items.find((item) => item.id === itemId)
  );

  const { category } = useCategoryStore();

  const editItem = () => {
    console.log(selectedItem);

    dispatch({
      type: "editItem",
      payload: selectedItem,
    });
    closeModal();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSelectedItem({
      ...(selectedItem as ItemEntity),
      [e.target.name]: e.target.value as string,
    });
  };

  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white border-2 rounded-xl px-4 py-6 z-10">
      <h3 className="font-bold text-center mb-8">수정</h3>
      <div className="grid grid-cols-2 gap-y-4">
        <label htmlFor="name">상품명</label>
        <input value={selectedItem?.name} name="name" id="name" />

        <label htmlFor="category">카테고리</label>
        <select
          defaultValue={selectedItem?.category}
          onChange={onChange}
          name="category"
        >
          {/* {categoryOptions.map((option) => ( */}
          {category.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>

        <label htmlFor="expirationDate">유통기한</label>
        <input
          onChange={onChange}
          type="date"
          value={dayjs(selectedItem?.expirationDate).format("YYYY-MM-DD")}
          name="expirationDate"
          id="expirationDate"
        />
      </div>
      <div className="flex justify-center mt-4 gap-x-2">
        <button
          className="bg-black text-white flex-1 py-1 rounded-md"
          onClick={editItem}
        >
          수정
        </button>
        <button
          className="bg-black text-white flex-1 py-1 rounded-md"
          onClick={closeModal}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
