import React from "react";

type Props = {
  closeModal: () => void;
  deleteItem: () => void;
};

export default function DeleteItemModal({ closeModal, deleteItem }: Props) {
  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white border-2 rounded-xl px-4 py-6 z-10">
      <h3 className="font-bold text-center mb-8">정말 삭제하시겠습니까?</h3>
      <div className="flex gap-x-4">
        <button
          className="w-[120px] py-1 bg-black rounded-md text-white"
          onClick={deleteItem}
        >
          네
        </button>
        <button
          className="w-[120px] py-1 bg-black rounded-md text-white"
          onClick={closeModal}
        >
          아니오
        </button>
      </div>
    </div>
  );
}
