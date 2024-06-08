import DeleteItemModal from "@/app/(application)/main/_components/modal/DeleteItemModal";
import EditModal from "@/app/(application)/main/_components/modal/EditModal";
import LinkModal from "@/app/(application)/main/_components/modal/LinkModal";
import { ItemEntity } from "@/entity/Item";
import { useItemStore } from "@/stores/useItemStore";
import { differenceInCalendarDays } from "date-fns";
import { useState } from "react";
import { BiSolidHelpCircle } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Fill } from "react-icons/ri";

type Props = {
  item: ItemEntity;
};

type ModalTypes = "delete" | "edit" | "none" | "link";

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

  const show = () => {
    setShowModal("link");
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
          <div className="text-[18px] absolute right-2 top-2 flex gap-x-1">
            <button
              // className="text-[12px] absolute right-2 top-2"
              onClick={showDeleteModal}
            >
              <RiDeleteBin7Fill />
            </button>
            <button
              // className="text-[12px] absolute right-2 top-2"
              onClick={showEditModal}
            >
              <FiEdit />
            </button>
            <button
              // className="text-[12px] absolute right-2 top-2"
              onClick={show}
            >
              <BiSolidHelpCircle />
            </button>
          </div>
        </div>
      </article>
      {showModal === "delete" && (
        <DeleteItemModal deleteItem={deleteItem} closeModal={closeModal} />
      )}
      {showModal === "edit" && (
        <EditModal closeModal={closeModal} itemId={item.id} />
      )}
      {showModal === "link" && (
        <LinkModal
          closeModal={closeModal}
          item={{
            name: item.name,
            restDays: restDays,
            restDayStyle: stylesAboutRestDays,
          }}
        />
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
