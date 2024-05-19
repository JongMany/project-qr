"use client";

import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  const loginHandler = () => {
    router.replace("/main");
  };

  return (
    <button
      type="button"
      className="py-1 bg-black text-white px-6 rounded-lg w-full"
      onClick={loginHandler}
    >
      로그인
    </button>
  );
}
