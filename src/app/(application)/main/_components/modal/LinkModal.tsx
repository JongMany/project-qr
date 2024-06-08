"use client";
type Props = {
  closeModal: () => void;
  item: {
    name: string;
    restDays: number;
    restDayStyle: string;
  };
};

export default function LinkModal({ closeModal, item }: Props) {
  const mention = {
    0: "유통기한이 지났습니다. 폐기방법을 알고 싶으신가요?",
    1: `유통기한이 하루 남았습니다. ${item.name}을(를) 활용하는 방법에 대해 알고 싶으신가요?`,
    2: `유통기한이 이틀 남았습니다. ${item.name}을(를) 활용하는 방법에 대해 알고 싶으신가요?`,
    3: `유통기한이 사흘 남았습니다. ${item.name}을(를) 활용하는 방법에 대해 알고 싶으신가요?`,
  };
  const linkToHandler = () => {
    if (window === undefined) return;
    const check = window.confirm("구글로 이동하시겠습니까?");
    if (check) {
      let url = ``;
      if (item.restDays > 3) {
        url = `https://www.google.com/search?q=${item.name} 활용 방법, 꿀팁`;
      } else if (item.restDays <= 0) {
        url = `https://www.google.com/search?q=${item.name} 폐기 방법`;
      } else {
        url = `https://www.google.com/search?q=${item.name} 활용 방법, 꿀팁`;
      }
      window.open(url, "_blank");
    } else {
      window.alert("취소되었습니다.");
    }
  };
  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white border-2 rounded-xl px-4 py-6 z-10 flex flex-col items-center">
      <h3 className="font-bold text-center mb-4">
        유통기한이 <span className={item.restDayStyle}>{item.restDays}</span>
        일이 남았습니다
      </h3>
      <p className="font-semibold text-center mb-6 text-balance">
        {item.restDays <= 3
          ? mention[`${item.restDays}` as "0" | "1" | "2" | "3"] ||
            "유통기한이 지났습니다. 폐기방법을 알고 싶으신가요?"
          : `${item.name}을(를) 활용하는 방법에 대해 알고 싶으신가요?`}
      </p>
      <div className="flex gap-x-4">
        <button
          className="w-[120px] py-1 bg-black rounded-md text-white"
          onClick={linkToHandler}
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
