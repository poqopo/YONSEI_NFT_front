// import { useLocation } from 'react-router-dom'; // 1번 라인
import { FaShareAlt } from 'react-icons/fa';
import { IoDownload } from 'react-icons/io5';
import { share } from '@/utils/axios';

export default function MyPage() {
  // const { state } = useLocation(); // 2번 라인
  // const { url } = state;
  const url = 'https://myyonseinft.s3.amazonaws.com/MAJOR/TEST/img/1.png';

  return (
    <div className="min-h-screen flex flex-col place-content-between py-10 gap-y-5 font-roboto text-[#090707]  text-center">
      <div>
        <h2 className=" font-bold text-[15px]">
          연세대학교 블록체인 동아리 <br />
          블록블록과 함께하는
        </h2>
        <h1 className="font-extrabold text-[24px] text-black">MY YONSEI NFT</h1>
      </div>
      <div className="mx-auto">
        <h3 className="font-bold text-center text-[17px]">
          나의 00이를 확인해보세요
        </h3>
        {/* <img
          className="my-3 max-w-[300px] mx-auto"
          src={url}
          // src="logo.png"
          alt="loading..."
        /> */}
        <img className="mx-auto w-[250px]" src="base.png" alt="loading..." />

        {/* <button
          type="button"
          className="mx-auto font-extrabold rounded-[15px] w-fit px-4 py-3 bg-[#FEE500] text-[#191919]"
          onClick={() => share(url)}
        >
          <div className="flex gap-x-4">
            <span>공유하기</span>
            <FaShareAlt className="m-auto" />
          </div>
        </button> */}
      </div>
      <div className="w-4/5 m-auto">
        <p className="">00이는 카카오톡에서도 확인 가능합니다.</p>
        <a href="kakaotalk://klipwallet/open?url=https://klipwallet.com/">
          <p className="my-5 text-[14px] font-bold text-center underline">
            00이 확인하러가기
          </p>
          <img className="mx-auto w-full" src="/klip.png" alt="loading..." />
        </a>
      </div>
    </div>
  );
}
