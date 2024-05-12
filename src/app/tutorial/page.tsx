import ScanIcon from "@/app/tutorial/_components/ScanIcon";
import ScanPanel from "@/app/tutorial/_components/ScanPanel";
import React from "react";
import { IoQrCode } from "react-icons/io5";

export default function page() {
  return (
    <main className="px-6 py-4 overflow-hidden h-[100vh] relative">
      <h1 className="font-semibold text-[32px] mb-4">Tutorial</h1>
      <section className="rounded-xl bg-blue-100 px-4 pt-4 pb-4 mb-12">
        <div className="flex items-center mb-2">
          <div className="bg-blue-200 flex items-center p-2 rounded-full">
            <IoQrCode className="fill-slate-400" />
          </div>
          <span className="text-blue-300 text-[22px] ml-4 font-semibold">
            Scan Codes
          </span>
        </div>
        <div>QR 코드를 스캔하여 물품의 소비기한을 관리하세요</div>
      </section>
      <section className="">
        <div className="flex flex-col items-center gap-y-2 mb-3">
          <h3 className="font-semibold text-[24px]">상품 정보 가져오기</h3>
          <div className="text-gray-400">
            상품의 바코드를 스캔하여 상품 정보를 가져옵니다.
          </div>
        </div>
        <ScanIcon />
      </section>
    </main>
  );
}
