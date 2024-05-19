import LoginButton from "@/app/(auth)/login/_components/LoginButton";
import Link from "next/link";

import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 h-[100vh]">
      <h1 className="font-bold text-[30px]">로그인</h1>
      <form className="grid grid-cols-[1fr_2fr] gap-y-6" method="post">
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
          <LoginButton />
        </div>
      </form>
      <Link href="/join">아직 아이디가 없으신가요? 회원가입</Link>
    </div>
  );
}
