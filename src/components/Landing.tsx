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
          setTimeout(() => {
            router.replace("/main");
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => interval.current && clearInterval(interval.current);
  }, [progress]);

  const dynamicWidthStyle = (percentage: number) => {
    return `w-[${percentage}%]`;
  };

  return (
    <div>
      <div className="w-[300px] h-[20px] relative">
        <div className="w-[300px] h-full absolute bg-blue-400"></div>
        <div
          style={{
            width: `${progress}%`,
          }}
          className={`h-full absolute bg-blue-800`}
        ></div>
      </div>
      <div>{progress}%</div>
    </div>
  );
}
