import SaveButton from "@/app/(application)/setting/_components/SaveButton";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="px-6 pt-8 font-semibold text-[22px] text-center">
        ⚙️ 설정
      </h1>
      <div className="mt-6 flex flex-col items-center">
        <div className="font-semibold text-[18px]">
          소비기한 만료 몇 일 전에 알림을 받고 싶으신가요?
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-2 border-2 border-solid rounded-md px-3 text-[15px]">
            <input
              className="max-w-[60px] text-center"
              type="number"
              defaultValue={1}
              max={7}
            />
            일 전
          </div>
          <p className="text-xs text-blue-300 mt-1">
            최대 7일까지 설정할 수 있습니다.
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center">
        <div className="font-semibold text-[18px]">
          언제 알림을 받고 싶으신가요?
        </div>
        <div className="mt-2 flex flex-col itmes-center text-center w-[100px]">
          <select className="text-[15px]">
            <option id="9" value="09:00">
              오전 9:00
            </option>
            <option id="12" value="12:00">
              오후 12:00
            </option>
            <option id="15" value="15:00">
              오후 03:00
            </option>
            <option id="18" value="18:00">
              오후 06:00
            </option>
            <option id="21" value="21:00">
              오후 09:00
            </option>
          </select>
        </div>
      </div>
      <SaveButton />
    </div>
  );
}
