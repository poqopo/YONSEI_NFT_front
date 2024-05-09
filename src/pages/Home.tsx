import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TiThMenu } from 'react-icons/ti';
import Howto from './Howto';
import Event from './Event';
import { getAddressPC, getAddressMB } from '../utils/klip';
import QnA from './QnA';
import { setAddress } from '@/store/store';
import Menu from '@/Components/Menu';
import { userDetail } from '@/utils/type';
import getMajor from '@/utils/getMajor';
import { addNewUser, getUserByAdress } from '@/utils/axios';
import CustomButton from '@/Components/Button';
import Character from './Character';
import RegisterStudentNumber from '@/PageComponents/RegisterStudentNumber';
import KakaoLoginButton from '@/PageComponents/KakaoLoginButton';
import KakaoQRModal from '@/PageComponents/KakaoQRModal';

const DEFAULT = 'DEFAULT';

export default function Home() {
  const [qrvalueAuth, setqrvalueAuth] = useState(DEFAULT);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [userToggle, setUserToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [studentNumber, setStudentNumber] = useState('');
  const [major, setMajor] = useState<
    { Department_KR: string; Department: string } | undefined
  >(undefined);
  const dispatch = useDispatch();
  const userAddress = useSelector((state: any) => state.user.address);
  const navigate = useNavigate();

  const checkInfo = async (info: userDetail) => {
    if (info.studentNumber === DEFAULT || info.studentNumber === '') {
      setUserToggle(true);
    } else {
      const majorDict = await getMajor(info.studentNumber);
      setMajor(majorDict);
      setShowMenu(true);
    }
  };
  const getUserData = () => {
    if (window.innerWidth > 500) {
      getAddressPC(setqrvalueAuth, async (address: string) => {
        dispatch(setAddress(address));
        checkInfo(await getUserByAdress(address));
      });
    } else {
      getAddressMB(async (address: string) => {
        dispatch(setAddress(address));
        setShowMenu(true);
        checkInfo(await getUserByAdress(address));
      });
    }
  };
  useEffect(() => {
    if (userAddress !== '') {
      getUserByAdress(userAddress).then((info: userDetail) => {
        checkInfo(info);
      });
    }
  }, []);

  return (
    <main className="h-full min-h-screen flex flex-col place-content-between font-roboto text-[#090707]  text-center">
      <button
        type="button"
        className="absolute top-5 ml-4 text-[30px]"
        onClick={() => setToggleMenu(true)}
      >
        <TiThMenu />
      </button>

      {toggleMenu ? <Menu toggleMenu={() => setToggleMenu(false)} /> : <div />}

      {userToggle ? (
        <RegisterStudentNumber
          studentNumber={studentNumber}
          userAddress={userAddress}
          major={major}
          setStudentNumber={setStudentNumber}
          setMajor={setMajor}
          setShowMenu={setShowMenu}
        />
      ) : (
        <div />
      )}

      <div className="w-full">
        <img className="w-full h-3/4" src="/background.png" alt="loading..." />
        {showMenu ? (
          <div className="relative -translate-y-full pb-5">
            <CustomButton
              text="NFT 발급하기"
              onClick={() => {
                navigate(`/Mint/${userAddress}`, {
                  state: { major: major?.Department_KR },
                });
              }}
            />
            <CustomButton
              text="나의 NFT 확인하기"
              onClick={() => {
                navigate(`/MyPage/${userAddress}`);
              }}
            />
            <CustomButton
              text="팜둥이 찾기 이벤트 참여하기"
              onClick={() => {
                navigate(`/Event/${userAddress}`);
              }}
            />
          </div>
        ) : (
          <KakaoLoginButton getUserData={getUserData} />
        )}
        {qrvalueAuth !== DEFAULT ? (
          <KakaoQRModal
            qrvalueAuth={qrvalueAuth}
            setqrvalueAuth={setqrvalueAuth}
          />
        ) : (
          <div />
        )}
      </div>

      <Character />
      <Howto />
      <Event />

      <QnA />
    </main>
  );
}
