import { useItemStore } from "@/stores/useItemStore";
import { differenceInCalendarDays } from "date-fns";
import { useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";

type Props = {
  item: {
    id: number;
    name: string;
    category: string;
    expirationDate: string;
    imageUrl: string;
  };
};

type ModalTypes = "delete" | "edit" | "none";

export default function Item({ item }: Props) {
  const { dispatch } = useItemStore();
  const [showModal, setShowModal] = useState<ModalTypes>("none");
  const restDays = differenceInCalendarDays(item.expirationDate, new Date());
  const stylesAboutRestDays = setStylesAboutRestDays(restDays);

  const showDeleteModal = () => {
    setShowModal("delete");
  };
  const showEditModal = () => {
    setShowModal("edit");
  };

  const closeModal = () => {
    setShowModal("none");
  };

  const deleteItem = () => {
    // deleteItemById(item.id);
    dispatch({ type: "removeItem", payload: { id: item.id } });
    closeModal();
  };

  return (
    <>
      <article
        className="w-[90%] rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex justify-between px-3 py-3 mt-4 relative "
        onDoubleClick={showEditModal}
      >
        <div className="w-[100px] h-[100px] rounded-xl mr-3">
          <img alt={item.name} src={item.imageUrl} />
        </div>
        <div className="flex-1 ">
          <h3 className="font-bold text-[20px] mb-2">{item.name}</h3>
          <div className="grid col-span-2 grid-cols-2 text-[14px]">
            <span>카테고리:</span>
            <span>{item.category}</span>
            <span>남은 유통기한:</span>
            <span className={stylesAboutRestDays}>{restDays}일</span>
          </div>
          <button
            className="text-[12px] absolute right-2 top-2"
            onClick={showDeleteModal}
          >
            <RiDeleteBin7Fill />
          </button>
        </div>
      </article>
      {showModal === "delete" && (
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
      )}
      {/* TODO: 편집 모달 */}
      {showModal === "edit" && (
        <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white border-2 rounded-xl px-4 py-6 z-10">
          <h3 className="font-bold text-center mb-8">편집</h3>
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
      )}
    </>
  );
}

function setStylesAboutRestDays(restDays: number) {
  if (restDays <= 0) {
    return "text-red-500 animate-pulse";
  } else if (restDays <= 3) {
    return "text-red-200";
  } else {
    return "text-blue-500";
  }
}
