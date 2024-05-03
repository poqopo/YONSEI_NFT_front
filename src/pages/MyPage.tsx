// import { useLocation } from 'react-router-dom'; // 1번 라인
import { useEffect } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { IoDownload } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import checkAddress from '@/utils/checkParams';
import shareImage from '@/utils/share';

export default function MyPage() {
  // const { state } = useLocation(); // 2번 라인
  // const { url } = state;
  const params = useParams();
  const url = 'https://myyonseinft.s3.amazonaws.com/MAJOR/TEST/img/1.png';
  const navigate = useNavigate();
  const userAddress = useSelector((state: any) => state.user.address);
  useEffect(() => {
    checkAddress(params.address);
  }, []);

  return (
    <div className="min-h-screen flex flex-col place-content-between py-10 gap-y-5 font-roboto text-[#090707]  text-center">
      <div className="mx-auto">
        <h3 className="font-bold text-center text-[17px]">
          나의 00이를 확인해보세요
        </h3>
        <img
          className="mx-auto w-[250px]"
          src="/sample/1.png"
          alt="loading..."
        />
        <button
          type="button"
          className="mx-auto my-3 rounded-[15px] bg-[#40C6FF] text-black px-2 py-3 font-bold"
          onClick={() => {
            shareImage(url, userAddress);
          }}
        >
          공유하기
        </button>
      </div>
      <button
        type="button"
        className="w-2/3 mx-auto my-3 rounded-[15px] bg-[#40C6FF]/40 hover:bg-white text-black px-2 py-3 drop-shadow-md font-bold"
        onClick={() => {
          navigate(`/Event/${userAddress}`);
        }}
      >
        이벤트 참여하러가기
      </button>
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
