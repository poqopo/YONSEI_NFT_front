import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';

import Gallery from '../Components/gallery';
import { findFriend } from '@/utils/axios';
import checkAddress from '@/utils/checkParams';
import '../styles/input.css';

export default function Referral() {
  const [input, setInput] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    checkAddress(params.address);
  }, []);

  return (
    <main className="min-h-screen flex flex-col place-content-between gap-y-3 py-8 font-roboto text-[#090707]  text-center">
      <button
        type="button"
        className="absolute top-5 ml-4 text-[30px]"
        onClick={() => navigate('/')}
      >
        <AiFillHome />
      </button>
      <div className="w-full rounded-[30px]">
        <Gallery />
        <div className="my-10 w-4/5 flex place-content-between m-auto ">
          <input
            type="number"
            placeholder="학번을 입력해주세요.(ex.2024123123)"
            className="w-2/3 m-auto text-[12px] p-3 rounded-l-[8px] text-start indent-1"
            onChange={(e: any) => setInput(e.target.value)}
          />
          <button
            type="button"
            className="w-1/3 font-extrabold rounded-r-[8px] p-3 bg-[#FEE500] text-[#191919] text-[12px]"
            onClick={async () => {
              const res = await findFriend(params.address, input);
              window.alert(res.result);
              if (res.status === 200) {
                navigate('/');
              }
            }}
          >
            타투스티커 신청
          </button>
        </div>
      </div>

      <h2 className="my-2 font-extrabold text-[18px] text-black">
        친구와 함께! 더 재미있게!
      </h2>
      <p className="font-bold text-[15px]">
        나와 같은 NFT를 가진 친구를 찾았나요? <br />
        친구의 학번을 입력하고 타투스티커를 받아가세요!
      </p>
      <p className="mt-5 font-medium text-[12px]">
        본 이벤트는 물량 소진시 까지 진행됩니다. <br />한 번 친구를 선택하면
        바꿀 수 없으니 신중해주세요!
      </p>
    </main>
  );
}
