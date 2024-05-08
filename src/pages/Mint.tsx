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
  const { state } = useLocation(); // 2번 라인
  const { major } = state;

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
          {/* <CustomButton
            text="블록블록 독팜희 NFT 받기"
            onClick={() => {
              onBlockBlockMintClick();
            }}
          /> */}
        </div>
      )}

      <p className="font-medium text-[16px]">
        나 싱크로나이즈드비행학과 독팜희, <br /> 너희와 함께 있는 시간이 너무
        즐거워! <br />
        우리가 함께한 시간을 NFT로 남기는 게 어때? <br /> <br />
        같은 과 친구들과 함께 NFT를 발급받고, <br />
        타투 스티커 이벤트에 참여할 수도 있다구! <br />
        도파민.. 아니 독팜희에 추l한ㄷr 추l@ㅐ//..
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
