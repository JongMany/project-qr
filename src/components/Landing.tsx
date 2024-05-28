"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Landing() {
  const [progress, setProgress] = useState(0);
  const prevProgress = useRef(0);
  const router = useRouter();
  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    interval.current && clearInterval(interval.current);
    interval.current = setInterval(() => {
      setProgress((prev) => {
        prevProgress.current = prev;
        if (prevProgress.current >= 100) {
          interval.current && clearInterval(interval.current);
          const user = localStorage.getItem("user");
          setTimeout(() => {
            if (user) {
              router.replace("/main");
            } else {
              router.replace("/login");
            }
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => {
      interval.current && clearInterval(interval.current);
    };
  }, [progress, router]);

  const dynamicWidthStyle = (percentage: number) => {
    return `w-[${percentage}%]`;
  };

  let fontColor;
  if (progress < 30) {
    fontColor = "text-green-300";
  } else if (progress < 60) {
    fontColor = "text-green-500";
  } else {
    fontColor = "text-green-700";
  }

  return (
    <div className="mt-4">
      <div className="w-[300px] h-[30px] relative">
        <div className="w-[300px] h-full absolute bg-green-300"></div>
        <div
          style={{
            width: `${progress}%`,
          }}
          className={`h-full absolute bg-green-700`}
        ></div>
      </div>
      <div className={`flex justify-center text-bold text-2xl ${fontColor}`}>
        {progress}%
      </div>
    </div>
  );
}
