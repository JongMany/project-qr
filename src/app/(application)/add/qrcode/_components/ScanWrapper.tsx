"use client";
import QRScanner from "@/components/QRScanner";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ShowItemInfoModal from "@/app/(application)/add/qrcode/_components/ShowItemInfoModal";
import { Item } from "@/entity/Item";
import Link from "next/link";

export default function ScanWrapper() {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [itemInfo, setItemInfo] = useState<Item | null>(null);

  const actionAfterScanSuccess = (result: any) => {
    const data = JSON.parse(
      result
        .replace(/^[\uFEFF\u200B]+|[\uFEFF\u200B]+$/g, "")
        .replace(/^'|'$/g, "")
    );
    setItemInfo(data);
    setShowInfoModal(true);
  };

  const redetectQRCode = () => {
    setShowInfoModal(false);
  };

  return (
    <>
      {!showInfoModal && (
        <div className="flex flex-col justify-center items-center w-full min-h-[70vh]">
          <QRScanner onActionAfterScan={actionAfterScanSuccess} />
          <Link replace href={"/add/product"}>
            뒤로가기
          </Link>
        </div>
      )}
      {showInfoModal && itemInfo && (
        <ShowItemInfoModal
          itemInfo={itemInfo}
          redetectQRCode={redetectQRCode}
        />
      )}
    </>
  );
}
