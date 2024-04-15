"use client";
import Modal from "@/app/Components/Modal/page";
import Gallery from "@/app/Components/gallery/page";
import departmentData from "@/app/utils/department.json";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const departmentInfo = departmentData[input];
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="flex flex-col place-content-between gap-y-5 mt-10 font-roboto text-[#090707]  text-center">
      <h2 className=" font-bold text-[15px]">
        연세대학교 블록블록과 000이 함께하는
      </h2>
      <h1 className="font-extrabold text-[24px] text-[#30A9DE]">
        MY YONSEI NFT
      </h1>
      <h2 className="font-bold text-[15px]">AKARAKA EVENT</h2>

      {showModal ? (
        <Modal>
          <p
            className="text-end text-black"
            onClick={() => setShowModal(false)}
          >
            X
          </p>
          <p className="mt-10">
            선택하신 과는 "{departmentInfo.Department_KR}"입니다. 맞다면 발급
            버튼을 눌러주세요! <br />
            카톡 아이디별로 1개밖에 발급이 되지 않으니 신중하게 선택해주세요
          </p>
          <button
            className="mx-auto font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#30A9DE] text-[#D9E1E8]"
            onClick={() => {
              setShowModal(false);
              console.log(departmentInfo.Source_Pre);
            }}
          >
            NFT 발급하기
          </button>
        </Modal>
      ) : (
        <div />
      )}

      <div className="w-full bg-[#D9E1E8]/20 rounded-[30px]">
        <Gallery />
        <div className="my-10 w-4/5 flex place-content-between m-auto ">
          <input
            type="text"
            className="w-[240px] text-[13px] rounded-[15px] text-start"
            placeholder="학번 가운데 3자리를 입력해주세요.(ex.110)"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="mx-auto font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#30A9DE] text-[#D9E1E8]"
            onClick={() => {
              if (departmentInfo == undefined) {
                window.alert("입력하신 학과가 존재하지 않습니다.");
              } else {
                setShowModal(true);
              }
            }}
          >
            NFT 발급하기
          </button>
        </div>
      </div>
      <h3 className="mt-4 font-bold text-[15px]">ABOUT</h3>
      <h2 className="mb-5 font-bold text-[20px]">
        나의 과 특징을 살린 NFT와 함께 <br /> 2024 AKARAKA를 즐겨보세요!
      </h2>
      <p className="font-medium text-[13px]">
        2024 AKARAKA를 더욱 특별하게 보낼 수 있도록 <br />
        다양한 모습을 가진 NFT와 타투스티커를 준비했습니다. <br /> 서로의 NFT를
        공유해보며 더 재밌는 AKARAKA를 보내보아요!
      </p>
    </main>
  );
}
