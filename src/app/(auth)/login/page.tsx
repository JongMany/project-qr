import React from "react";

export default function page() {
  return (
    <div>
      <form>
        <label htmlFor="name">이름</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="userId">아이디</label>
        <input type="text" id="userId" name="userId" />
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" name="password" />
      </form>
    </div>
  );
}
