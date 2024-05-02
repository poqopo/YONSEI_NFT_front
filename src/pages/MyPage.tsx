// import { useLocation } from 'react-router-dom'; // 1번 라인
import { FaShareAlt } from 'react-icons/fa';
import { IoDownload } from 'react-icons/io5';

export default function MyPage() {
  // const { state } = useLocation(); // 2번 라인
  // const { url } = state;
  const url = 'https://myyonseinft.s3.amazonaws.com/MAJOR/TEST/img/1.png';

  return (
    <div className="min-h-screen flex flex-col place-content-between py-10 gap-y-5 font-roboto text-[#090707]  text-center">
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
