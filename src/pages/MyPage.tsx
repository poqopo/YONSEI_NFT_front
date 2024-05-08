import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import checkAddress from '@/utils/checkParams';
import CustomButton from '@/Components/Button';
import { getUserNFTs } from '@/utils/axios';
import { NFTDetail } from '@/utils/type';
import Gallery from '@/Components/gallery';

export default function MyPage() {
  const params = useParams(); // 2번 라인
  const navigate = useNavigate();
  const [nfts, setNFTs] = useState<{ nfts: NFTDetail[] }>({ nfts: [] }); // 초기 상태를 객체로 설정

  async function getInfo() {
    const userNFTs = await getUserNFTs(params.address); // getUserNFTs 함수 호출 및 반환 값 기다림
    setNFTs({ nfts: userNFTs }); // 반환된 결과의 results 배열을 설정
  }
  useEffect(() => {
    checkAddress(params.address);
    getInfo();
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

      {nfts.nfts.length > 0 ? (
        <Gallery nfts={nfts.nfts} />
      ) : (
        <div className="">
          <div className="mx-auto w-4/5 max-w-[300px] p-3 bg-[#FCFCF4] rounded-[10px] my-10">
            <img className="mx-auto " src="/character.png" alt="loading..." />
          </div>

          <p className="text-[#090707] my-10">
            어라, 아직도 날 안데려간거야? <br /> <br /> 조금 실망인걸 <br />{' '}
            어서 나 독팜희를 친구들에게 데려가줘!🐥
          </p>
        </div>
      )}
      <CustomButton text="홈으로 돌아가기" onClick={() => navigate('/')} />
    </div>
  );
}
