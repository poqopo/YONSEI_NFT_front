import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import checkAddress from '@/utils/checkParams';
import shareImage from '@/utils/share';

export default function MyPage() {
  const params = useParams(); // 2번 라인
  console.log(params);
  const navigate = useNavigate();
  useEffect(() => {
    checkAddress(params.address);
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-y-5 font-roboto text-[#090707] text-center pb-5">
      <button
        type="button"
        className="absolute top-5 ml-4 text-[30px]"
        onClick={() => navigate('/')}
      >
        <AiFillHome />
      </button>
      <div className="mx-auto w-4/5 p-3 bg-[#FCFCF4] rounded-[10px]">
        <img className="mx-auto " src="/sample/1.png" alt="loading..." />
      </div>

      <h2 className="my-4 text-center font-bold text-[20px]">
        {params.major} 도팜희
      </h2>
      <p className="text-[#090707]">
        어라, 얼떨결에 전과해버렸잖아⁉️ <br /> <br /> 오히려 좋아!! <br />{' '}
        새로운 건 언제나 즐거우니까😎 <br /> 이제 우리 더 친해져 보자구! <br />
        아래 공유하기 버튼을 눌러서 <br /> 바로 나 도팜희를 친구들에게
        소개해줘!🐥
      </p>

      <button
        type="button"
        className="mx-auto w-5/6 font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#FEE500] text-[#191919] border-2 border-black"
        onClick={async () => {
          console.log('HELLO');
        }}
      >
        인스타그램 스토리 공유하기
      </button>
      <button
        type="button"
        className="mx-auto w-5/6 font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#FEE500] text-[#191919] border-2 border-black"
        onClick={async () => {
          navigate(`/Event/${params.address}`);
        }}
      >
        팜동희 찾기 이벤트 공유하기
      </button>
    </div>
  );
}
