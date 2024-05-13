import ScanWrapper from "@/app/(application)/add/qrcode/_components/ScanWrapper";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col">
      <ScanWrapper />
    </div>
  );
}
