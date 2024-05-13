import { Item } from "@/entity/Item";
import { useItemStore } from "@/stores/useItemStore";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

type Props = {
  itemInfo: Item;
  redetectQRCode: () => void;
};

export default function ShowItemInfoModal({ itemInfo, redetectQRCode }: Props) {
  const { category, expirationDate, name } = itemInfo;
  const router = useRouter();
  const { dispatch } = useItemStore();
  const saveItemInfo = () => {
    dispatch({
      type: "registerItem",
      payload: {
        id: Math.random(),
        name,
        category,
        expirationDate,
        imageUrl: itemInfo.imageUrl
          ? itemInfo.imageUrl
          : "https://via.placeholder.com/100",
      },
    });
    router.replace("/main");
  };
  return (
    <section className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] px-8 py-4 rounded-xl min-w-[300px]">
      <h1 className="text-[20px] font-bold mb-2">
        확인하신 정보가 맞으신가요?
      </h1>
      <div className="mb-2">
        <p className="text-[13px]">
          메인페이지에서 수정가능하니 걱정하지 않으셔도 괜찮아요
        </p>
      </div>
      <div className="grid grid-cols-2 text-[16px] mb-4">
        <div className="font-semibold">상품명</div>
        <div>{name}</div>
        <div className="font-semibold">카테고리</div>
        <div>{category}</div>
        <div className="font-semibold">유효기간</div>
        <div>{dayjs(expirationDate).format("YYYY-MM-DD")}</div>
      </div>
      <div className="flex gap-x-5">
        <button
          className="flex-1 bg-black text-white font-semibold rounded-md py-1"
          onClick={saveItemInfo}
        >
          네
        </button>
        <button
          className="flex-1 bg-black text-white font-semibold rounded-md py-1"
          onClick={redetectQRCode}
        >
          아니오
        </button>
      </div>
    </section>
  );
}
