import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';

import { registerFriend } from '@/utils/axios';
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
    <main className="h-screen flex flex-col gap-y-3 font-roboto text-[#090707]  text-center">
      <button
        type="button"
        className="absolute top-5 ml-4 text-[30px]"
        onClick={() => navigate('/')}
      >
        <AiFillHome />
      </button>
      <div className="w-full rounded-[30px]">
        <h3 className="font-extrabold text-[24px] text-black">
          팜둥희를 찾아팜!
        </h3>
        <img
          className="mx-auto w-3/4 -translate-y-1/4"
          src="/friend.png"
          alt="loading..."
        />
        <p className="font-bold text-[15px]">
          나와 같은 팜희를 가진 친구를 찾았나요? <br />
          이벤트 참여하고 타투스티커를 받아가세요!
        </p>
        <div className="mx-auto my-4 w-3/4 rounded-[12px] max-w-[400px] bg-white p-4">
          <div className="p-3">
            <h2 className="text-start font-bold text-[18px]">
              친구의 학번을 입력해주세요.
            </h2>
            <h3 className="text-[#475467] text-[16px] text-start">
              수정할 수 없으니 신중히 확인해 주세요!
            </h3>
          </div>
          <div className="px-3 py-1">
            <p className="pb-3 text-[#344054] text-start text-[14px]">학번*</p>
            <input
              type="text"
              placeholder="학번 10자리를 입력해주세요."
              className="w-full h-[45px] m-auto text-[12px] p-3 rounded-[8px] border-2 border-[#D0D5DD] text-start indent-1"
              onClick={(e: any) => setInput(e.target.value)}
            />
            <button
              type="button"
              className="w-full mx-auto my-2 rounded-[15px] bg-[#FEE500] hover:bg-white text-black px-2 py-3 font-bold border-2 border-black"
              onClick={() => registerFriend(params.address, input)}
            >
              제출하기
            </button>
          </div>
        </div>
      </div>

      <p className="mt-5 font-medium text-[12px]">
        본 이벤트는 물량 소진시 까지 진행됩니다. <br />한 번 친구를 선택하면
        바꿀 수 없으니 신중해주세요!
      </p>
    </main>
  );
}
