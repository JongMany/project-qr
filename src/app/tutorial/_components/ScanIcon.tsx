"use client";
import ScanPanel from "@/app/tutorial/_components/ScanPanel";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoQrCode } from "react-icons/io5";

export default function ScanIcon() {
  const router = useRouter();
  const [didTutorial, setDidTutorial] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const startScanning = () => {
    setDidTutorial(true);
    setIsScanning(true);
  };
  const stopScanning = () => setIsScanning(false);
  return (
    <>
      <div className="overflow-y-scroll flex flex-col justfiy-center items-center">
        <div
          className="rounded-full bg-red-400 w-[200px] h-[200px] flex justify-center items-center mb-6 cursor-pointer"
          onClick={startScanning}
        >
          <div className="rounded-full bg-red-600 w-[160px] h-[160px] flex justify-center items-center">
            <div className="flex flex-col items-center justify-center fill-white text-white text-[30px]">
              <IoQrCode />
              <div>스캔</div>
            </div>
          </div>
        </div>
        <div
          className={`transition-opacity duration-700 ${
            didTutorial ? "opacity-100" : "opacity-0"
          } `}
        >
          <button
            className={`font-semibold border-2 px-2 py-1 rounded-lg delay-500 border-black`}
            disabled={!didTutorial}
            onClick={() => {
              router.replace("/main");
            }}
          >
            다음으로
          </button>
        </div>
      </div>
      <ScanPanel isScanning={isScanning} stopScanning={stopScanning} />
    </>
  );
}
