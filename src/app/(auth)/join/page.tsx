import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 h-[100vh]">
      <h1 className="font-bold text-[30px]">회원가입</h1>
      <form className="grid grid-cols-[1fr_2fr] gap-y-6">
        <label htmlFor="name" className="font-semibold text-[20px]">
          이름
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="border-2 rounded-md"
        />
        <label htmlFor="userId" className="font-semibold text-[20px]">
          아이디
        </label>
        <input
          type="text"
          id="userId"
          name="userId"
          className="border-2 rounded-md"
        />
        <label htmlFor="password" className="font-semibold text-[20px]">
          비밀번호
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="border-2 rounded-md"
        />
        <div className="col-span-2">
          <button className="py-1 bg-black text-white px-6 rounded-lg w-full">
            회원가입
          </button>
        </div>
      </form>
      <Link href="/login" replace>
        뒤로가기
      </Link>
    </div>
  );
}
