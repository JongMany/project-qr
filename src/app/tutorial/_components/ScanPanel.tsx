"use client";

import QRScanner from "@/components/QRScanner";
// import QRScanner from "@/app/tutorial/_components/QRScanner";
import { useQRCode } from "next-qrcode";

// export default function ScanPanel() {
//   function onScan(result: any) {
//     console.log(result);
//   }

//   // 모바일 장치인지 확인하기 -> 리다이렉트
//   if (
//     navigator.userAgent.match(/Android/i) ||
//     navigator.userAgent.match(/webOS/i) ||
//     navigator.userAgent.match(/iPhone/i) ||
//     navigator.userAgent.match(/iPad/i) ||
//     navigator.userAgent.match(/iPod/i) ||
//     navigator.userAgent.match(/BlackBerry/i) ||
//     navigator.userAgent.match(/Windows Phone/i)
//   ) {
//     return (
//       <div>
//         <h3 className="font-semibold text-[24px] mt-12">Tutorial</h3>
//         <div className="text-gray-400">
//           <Cameras>
//             {(cameras: any) => (
//               <div>
//                 <h1>Scan the code!</h1>
//                 <Scanner camera={cameras[0]} onScan={onScan}>
//                   <video style={{ width: 400, height: 400 }} />
//                 </Scanner>
//               </div>
//             )}
//           </Cameras>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h3 className="font-semibold text-[24px] mt-12">Tutorial</h3>
//       <div className="text-gray-400">
//         이 기능은 모바일에서만 사용할 수 있습니다.
//       </div>
//     </div>
//   );
// }

type Props = {
  isScanning: boolean;
  stopScanning: () => void;
};
export default function ScanPanel({ isScanning, stopScanning }: Props) {
  return (
    <div
      className={`duration-500 transition-all absolute left-0 delay-150 ${
        isScanning ? "bottom-0" : "translate-y-[100vh]"
      } w-full h-[500px] bg-white px-8 py-4 rounded-t-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-center z-30`}
    >
      <div className="flex justify-end w-full">
        <button
          className="bg-red-400 text-white px-4 py-2 rounded-all"
          onClick={stopScanning}
        >
          X
        </button>
      </div>
      <h3 className="font-semibold text-[24px] mt-4 mb-4">Tutorial</h3>
      <div className="mb-4">QR 코드를 스캔해주세요</div>
      <div>{isScanning ? <QRScanner /> : null}</div>
    </div>
  );
}
