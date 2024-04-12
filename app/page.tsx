"use client";

import Image from "next/image";
import Gallery from "./Components/gallery/page";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col place-content-between gap-y-5 mt-5">
      <h1 className=" font-extrabold text-[32px] text-center">Yonsei NFT</h1>
      <button
        className="mx-auto w-fit px-10 text-center h-[50px] rounded-xl text-[#3A1D1D] text-[18px] font-extrabold bg-[#FEE500] + hover:bg-[#AAAAAA]"
        onClick={() => console.log(1)}
      >
        NFT 발급받기
      </button>
      <p>
        연세대학교 블록블록 동아리 블록블록과 최고의 블록체인 네트워크 폴리곤이
        함께합니다. <br />
        <p>본 NFT는 양도, 거래할 수 없습니다.</p>
      </p>
    </main>
  );
}
