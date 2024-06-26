"use client";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import { FaCalendarCheck } from "react-icons/fa";
import { IoIosSettings, IoMdAddCircleOutline, IoMdHome } from "react-icons/io";

const active = "text-red-500 fill-red-500";
const inactive = "text-gray-500 fill-gray-500";
export default function MenuItems() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 flex px-6 py-2 w-full bg-[#F9F9F9] text-[18px] justify-around items-center max-h-[7vh] h-[7vh]">
      <div className={`${pathname.includes("main") ? active : inactive}`}>
        <Link
          href="/main"
          className=" flex flex-col items-center justify-center"
        >
          <span>
            <IoMdHome />
          </span>
          <span>메인</span>
        </Link>
      </div>
      <div className={`${pathname.includes("add") ? active : inactive}`}>
        <Link
          href={"/add/product"}
          className=" flex flex-col items-center justify-center"
        >
          <span>
            <IoMdAddCircleOutline />
          </span>
          <span>추가</span>
        </Link>
      </div>
      <div className={`${pathname.includes("calendar") ? active : inactive}`}>
        <Link
          href={"/calendar"}
          className=" flex flex-col items-center justify-center"
        >
          <span>
            <FaCalendarCheck />
          </span>
          <span>캘린더</span>
        </Link>
      </div>
      <div className={`${pathname.includes("setting") ? active : inactive} `}>
        <Link
          href="/setting"
          className="flex flex-col items-center justify-center"
        >
          <span>
            <IoIosSettings />
          </span>
          <span>설정</span>
        </Link>
      </div>
    </nav>
  );
}
