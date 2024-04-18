import { useLocation } from 'react-router-dom'; // 1번 라인

export default function MyPage() {
  const { state } = useLocation(); // 2번 라인
  const { url } = state;

  return (
    <div className="h-screen flex flex-col place-content-between py-10 gap-y-5 font-roboto text-[#090707]  text-center">
      <div>
        <h2 className=" font-bold text-[15px]">
          연세대학교 블록체인 동아리 <br />
          블록블록과 함께하는
        </h2>
        <h1 className="font-extrabold text-[24px] text-[#30A9DE]">
          MY YONSEI NFT
        </h1>
      </div>

      <div className="mx-auto ">
        <h3 className="font-bold text-center text-[17px]">
          나의 NFT를 확인해보세요
        </h3>
        <img
          className="my-3 max-w-[300px] mx-auto"
          src={url}
          // src="logo.png"
          alt="loading..."
        />
        <div className="flex">
          <button
            type="button"
            className="mx-auto font-extrabold rounded-[15px] w-fit px-4 py-3 bg-[#FEE500] text-[#191919]"
          >
            이미지 다운로드
          </button>

          <button
            type="button"
            className="mx-auto font-extrabold rounded-[15px] w-fit px-4 py-3 bg-[#FEE500] text-[#191919]"
          >
            공유하기
          </button>
        </div>
      </div>
      <div className="w-4/5 m-auto">
        <p className="">
          NFT는 카카오톡 내 클립 지갑 서비스에서 확인 가능합니다.
        </p>
        <img src="klip.png" alt="loading..." />
      </div>
    </div>
  );
}
