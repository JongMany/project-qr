import Link from "next/link";

export default function page() {
  return (
    <section className="flex flex-col items-center">
      <h3 className="pt-12 px-4 font-semibold text-center text-[24px]">
        추가하실 방식을 선택하세요
      </h3>
      {/* 수동, QR, (추후)바코드  */}
      <div className="flex flex-col mt-12 text-[18px] gap-y-4">
        <div className="flex justify-center">
          <Link href="/add/user-input">
            <button className="w-[120px] py-1 bg-black rounded-md text-white">
              수동 입력
            </button>
          </Link>
        </div>
        <div>
          <Link href="/add/qrcode">
            <button className="w-[120px] py-1 bg-black rounded-md text-white">
              QR 코드
            </button>
          </Link>
        </div>
        <div>
          <Link href="/add/barcode">
            <button className="w-[120px] py-1 bg-black rounded-md text-white">
              바코드
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
