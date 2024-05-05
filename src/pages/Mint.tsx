import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import ReactLoading from 'react-loading';
import { AiFillHome } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { getUserByAdress, mint } from '../utils/axios';
import getMajor from '@/utils/getMajor';
import checkAddress from '@/utils/checkParams';
import { mintInfo } from '@/utils/type';

export default function Mint() {
  const [input, setInput] = useState('');
  const [major, setMajor] = useState<
    { Department_KR: string; Department: string } | undefined
  >(undefined);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mintInfos, setMintInfo] = useState<mintInfo>({
    maxMintCount: 0,
    nftCount: 0,
  });
  const params = useParams();
  const navigate = useNavigate();
  const userAddress = useSelector((state: any) => state.user.address);

  async function searchMajor(studentNumber: string) {
    if (studentNumber.length !== 10) {
      window.alert('잘못된 학번입니다.');
      return false;
    }
    const majorDict = await getMajor(studentNumber);
    if (majorDict === undefined) {
      window.alert('입력하신 학과는 아직 준비중입니다.');
      return false;
    }
    setMajor(majorDict);
    setShowModal(true);
    return true;
  }

  async function getInfo() {
    setMintInfo(await getUserByAdress(params.address));
  }
  useEffect(() => {
    checkAddress(params.address);
    getInfo();
  }, []);

  return (
    <main className="h-full min-h-screen flex flex-col h-full min-h-screen font-roboto text-[#090707]  text-center">
      <button
        type="button"
        className="absolute top-5 ml-4 text-[30px]"
        onClick={() => navigate('/')}
      >
        <AiFillHome />
      </button>

      {}

      {showModal ? (
        <div className="fixed top-1/3 right-1/2 translate-x-1/2 w-5/6 rounded-[12px] max-w-[500px] bg-white z-50 px-5">
          <div className="mt-5 flex place-content-between">
            <h2 className="text-[18px] font-extrabold">도팜희 학과 확인</h2>
            <button
              type="button"
              className="text-[30px]"
              onClick={() => setShowModal(false)}
            >
              <IoCloseCircleOutline />
            </button>
          </div>
          <div className="text-[16px] text-start my-2">
            <span className="font-bold">{major?.Department_KR}</span>
            <span>가 맞으신가요?</span>
          </div>
          <div>
            <button
              type="button"
              className="mx-auto mt-5 w-full font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#FEE500] text-[#191919] border border-black"
              onClick={async () => {
                setShowModal(false);
                setLoading(true);
                const res = await mint(
                  params.address,
                  major?.Department,
                  input,
                );
                setLoading(false);
                window.alert(res.result);
                if (res.status === 200) {
                  navigate(
                    `/MyPage/${params.address}/${major?.Department_KR}/${res.url}`,
                  );
                }
              }}
            >
              네, 맞아요 -NFT 제작하기
            </button>
            <button
              type="button"
              className="mx-auto my-5 w-full font-extrabold rounded-[15px] w-fit px-6 py-3 bg-white text-[#191919] border border-black"
              onClick={async () => {
                setShowModal(false);
              }}
            >
              아니에요 -학번 다시 확인하기
            </button>
          </div>
        </div>
      ) : (
        <div />
      )}

      {loading ? (
        <div>
          <ReactLoading type="bubbles" color="black" className="m-auto" />
          <p>
            NFT를 만들고 있습니다 <br />
            NFT가 만들어질 때 까지 10~20초가 소요될 수 있습니다.
          </p>
        </div>
      ) : (
        <div className="w-full rounded-[30px]">
          <img
            className="mx-auto w-[300px]"
            src="/character.png"
            alt="loading..."
          />
          <h2 className="my-2 text-[16px] text-black">
            <span>여러분의 </span>
            <span className="font-bold">학과별 특징</span>
            <span>이 담긴 </span>
            <span className="font-bold">팜희 NFT를</span> <br />
            <span className="font-bold">
              {mintInfos.maxMintCount - mintInfos.nftCount} 개
            </span>
            <span>받을 수 있어요</span>
          </h2>
          <div className="my-10 w-3/4 flex place-content-between m-auto rounded-[8px] border border-black">
            <input
              type="text"
              placeholder="학번을 입력해주세요.(ex.2024123123)"
              className="w-2/3 h-[45px] m-auto text-[12px] p-3 rounded-l-[8px] text-start indent-1"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="button"
              className="w-1/3 font-extrabold rounded-r-[8px] p-3 bg-[#FEE500] text-[#191919] text-[12px]"
              onClick={() => {
                searchMajor(input);
              }}
            >
              NFT 제작
            </button>
          </div>
        </div>
      )}

      <p className="font-medium text-[16px]">
        나 싱크로나이즈드비행학과 도팜희, <br /> 너희와 함께 있는 시간이 너무
        즐거워! <br />
        우리가 함께한 시간을 NFT로 남기는 게 어때? <br /> <br />
        같은 과 친구들과 함께 NFT를 발급받고, <br />
        타투 스티커 이벤트에 참여할 수도 있다구! <br />
        도파민.. 아니 도팜희에 추l한ㄷr 추l@ㅐ//..
      </p>
      <button
        type="button"
        className="w-3/4 mx-auto my-3 rounded-[15px] bg-[#FEE500] hover:bg-white text-black px-2 py-3 drop-shadow-md font-bold border-2 border-black"
        onClick={() => {
          navigate(`/`);
        }}
      >
        나의 NFT 확인하기
      </button>
    </main>
  );
}
