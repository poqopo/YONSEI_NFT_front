import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import ReactLoading from 'react-loading';
import { AiFillHome } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { getUserByAdress, mint } from '../utils/axios';
import getMajor from '@/utils/getMajor';
import checkAddress from '@/utils/checkParams';
import { mintInfo, userDetail } from '@/utils/type';
import CustomButton from '@/Components/Button';
import StudentInput from '@/Components/StudentNumberInput';

const DEFAULT = 'DEFAULT';

export default function Mint() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<userDetail>({
    userAddress: DEFAULT,
    major: DEFAULT,
    studentNumber: DEFAULT,
    maxMintableNumber: 1,
    ownedNFTNumber: 0,
    friendAddress: '',
  });
  const params = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [major, setMajor] = useState<
    { Department_KR: string; Department: string } | undefined
  >(undefined);
  async function getInfo() {
    setUser(await getUserByAdress(params.address));
  }
  useEffect(() => {
    checkAddress(params.address);
    getInfo();
  }, []);

  const onMintClick = async () => {
    setLoading(true);
    const res = await mint(user.userAddress, user.major);
    setLoading(false);
    if (res.status === 200) {
      navigate(`/AfterMint/${user.userAddress}`, {
        state: { major, url: res.url },
      });
    } else {
      window.alert(res.result);
    }
  };

  const onBlockBlockMintClick = async () => {
    setLoading(true);
    const res = await mint(user.userAddress, 'BlockBlock');
    setLoading(false);
    if (res.status === 200) {
      navigate(`/AfterMint/${user.userAddress}`, {
        state: { major, url: res.url },
      });
    } else {
      window.alert(res.result);
    }
  };

  async function searchMajor(inputs: string) {
    const majorDict = await getMajor(inputs);
    setMajor(majorDict);
  }

  const handleInputChange = (value: string) => {
    setInput(value);
    searchMajor(input);
  };

  // Function that processes the submitted student number
  const handleSubmit = async () => {
    setLoading(true);
    const res = await mint(user.userAddress, major?.Department);
    setLoading(false);
    if (res.status === 200) {
      navigate(`/AfterMint/${user.userAddress}`, {
        state: { major: major?.Department_KR, url: res.url },
      });
    } else {
      window.alert(res.result);
    }
  };

  return (
    <main className="h-screen flex flex-col place-content-evenly pb-[80px] font-roboto text-[#090707]  text-center">
      <button
        type="button"
        className="absolute top-5 ml-4 text-[30px]"
        onClick={() => navigate('/')}
      >
        <AiFillHome />
      </button>

      {loading ? (
        <div>
          <ReactLoading type="bubbles" color="black" className="m-auto" />
          <p>
            NFT를 만들고 있습니다 <br />
            NFT가 만들어질 때 까지 <br /> 10~20초가 소요될 수 있습니다.
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
              {user.maxMintableNumber - user.ownedNFTNumber} 개
            </span>
            <span>받을 수 있어요</span>
          </h2>
          <CustomButton
            text="우리 과 독팜희 NFT 받기"
            onClick={() => {
              onMintClick();
            }}
          />
          <CustomButton
            text="블록블록 독팜희 NFT 받기"
            onClick={() => {
              onBlockBlockMintClick();
            }}
          />
          <StudentInput
            inputText="학번 10자리를 입력해주세요"
            onChange={handleInputChange}
            onClick={handleSubmit}
            buttonText="민팅하기"
          />
        </div>
      )}

      <p className="font-medium text-[16px]">
        0000144000 : 사환시 <br />
        0000142000 : 전전 <br />
        0000145000 : 기공 <br />
        0000143000 : 건축학부 <br />
        0000146000 : 신소재공학부 <br />
      </p>
      <CustomButton
        text="나의 NFT 확인하기"
        onClick={() => {
          navigate(`/MyPage/${user.userAddress}`);
        }}
      />
    </main>
  );
}
