import { useState } from 'react';
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { TiThMenu } from 'react-icons/ti';
import Gallery from '../Components/gallery';
import Howto from './Howto';
import Event from './Event';
import { getAddressPC, getAddressMB } from '../utils/klip';
import Modal from '../Components/Modal';
import QnA from './QnA';
import { setAddress } from '@/store/store';
import Menu from '@/Components/Menu';
import { userDetail } from '@/utils/type';
import getMajor from '@/utils/getMajor';

const DEFAULT_QR_CODE = 'DEFAULT';

export default function Home() {
  const [qrvalueAuth, setqrvalueAuth] = useState(DEFAULT_QR_CODE);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [userToggle, setUserToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showconfirmModal, setShowConfirmModal] = useState(false);
  const [studentNumber, setStudentNumber] = useState('');
  const [major, setMajor] = useState<
    { Department_KR: string; Department: string } | undefined
  >(undefined);
  const dispatch = useDispatch();
  const userAddress = useSelector((state: any) => state.user.address);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<userDetail>({
    userAddress: '',
    studentNumber: '',
    maxMintableCount: 1,
    ownedNFT: 0,
    friendAddress: '',
  });
  const getUserData = () => {
    if (window.innerWidth > 500) {
      getAddressPC(setqrvalueAuth, async (address: string) => {
        dispatch(setAddress(address));
        setShowMenu(true);
      });
    } else {
      getAddressMB(async (address: string) => {
        dispatch(setAddress(address));
        setShowMenu(true);
      });
    }
  };
  async function searchMajor(input: string) {
    if (input.length !== 10) {
      window.alert('잘못된 학번입니다.');
      setShowConfirmModal(false);
      setStudentNumber('');
    }
    const majorDict = await getMajor(input);
    if (majorDict === undefined) {
      window.alert('입력하신 학과는 아직 준비중입니다.');
      setShowConfirmModal(false);
      setStudentNumber('');
    }

    setMajor(majorDict);
    setShowConfirmModal(true);
  }
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
        <div className="fixed top-1/3 right-1/2 translate-x-1/2 w-5/6 rounded-[12px] max-w-[400px] bg-white z-50 p-5">
          <h2 className="text-start font-bold ">처음 오셨군요!</h2>
          {showconfirmModal ? (
            <div>
              <div className="text-[16px] text-start my-2">
                <span className="font-bold">{major?.Department_KR}</span>
                <span>가 맞으신가요?</span>
              </div>
              <div>
                <button
                  type="button"
                  className="mx-auto mt-5 w-full font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#FEE500] text-[#191919] border border-black"
                  onClick={async () => {
                    setShowConfirmModal(false);
                    setUserToggle(false);
                  }}
                >
                  네, 맞아요
                </button>
                <button
                  type="button"
                  className="mx-auto my-5 w-full font-extrabold rounded-[15px] w-fit px-6 py-3 bg-white text-[#191919] border border-black"
                  onClick={async () => {
                    setStudentNumber('');
                    setShowConfirmModal(false);
                  }}
                >
                  아니에요 -학번 다시 확인하기
                </button>
              </div>
            </div>
          ) : (
            <div>
              <img className="py-5" src="character.png" alt="loading..." />
              <div className="">
                <input
                  type="text"
                  placeholder="학번을 입력해주세요.(ex.2024123123)"
                  className="w-2/3 h-[45px] m-auto text-[12px] p-3 rounded-l-[8px] text-start indent-1"
                  onChange={(e) => setStudentNumber(e.target.value)}
                />
                <button
                  type="button"
                  className="w-1/3 font-extrabold rounded-r-[8px] p-3 bg-[#FEE500] text-[#191919] text-[12px]"
                  onClick={() => {
                    searchMajor(studentNumber);
                  }}
                >
                  제출하기
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div />
      )}
      <div className="w-full">
        <img className="w-full" src="/background.png" alt="loading..." />
        {showMenu ? (
          <div>
            <button
              type="button"
              className="w-3/4 -translate-y-full"
              onClick={() => getUserData()}
            >
              <img
                className="w-full"
                src="/kakao_login_pc.png"
                alt="loading..."
              />
            </button>
          </div>
        ) : (
          <div className="-translate-y-full pb-10">
            <button
              type="button"
              className="w-3/4 mx-auto my-2 rounded-[15px] bg-[#FEE500] hover:bg-white text-black px-2 py-3 drop-shadow-md font-bold border-2 border-black"
              onClick={() => {
                navigate(`/Mint/${userAddress}`);
              }}
            >
              NFT 발급하기
            </button>
            <button
              type="button"
              className="w-3/4 mx-auto my-2 rounded-[15px] bg-[#FEE500] hover:bg-white text-black px-2 py-3 drop-shadow-md font-bold border-2 border-black"
              onClick={() => {
                navigate(`/Event/${userAddress}`);
              }}
            >
              나의 NFT 확인하기
            </button>
            <button
              type="button"
              className="w-3/4 mx-auto my-2 rounded-[15px] bg-[#FEE500] hover:bg-white text-black px-2 py-3 drop-shadow-md font-bold border-2 border-black"
              onClick={() => {
                navigate(`/Event/${userAddress}`);
              }}
            >
              팜동희 찾기 이벤트 참여하기
            </button>
          </div>
        )}
        {qrvalueAuth !== DEFAULT_QR_CODE ? (
          <Modal>
            <button
              type="button"
              className="fixed top-[20px] right-[20px] text-[30px]"
              onClick={() => setqrvalueAuth(DEFAULT_QR_CODE)}
            >
              <IoCloseCircleOutline />
            </button>
            <div className="py-10 px-5 flex flex-col place-content-between h-full">
              <QRCode
                value={qrvalueAuth}
                size={200}
                style={{
                  margin: '0 auto',
                  padding: '10px',
                  background: 'white',
                  borderRadius: '12px',
                }}
              />
              <div>
                <p className="font-extrabold text-[20px]">MY YONSEI NFT</p>
              </div>
              <div className="w-3/4 my-5 text-start font-extrabold mx-auto text-[18px]">
                <p>1. 카메라로 QR코드 스캔</p>
                <p className="py-1">
                  <span>2. </span>
                  <span className="text-white">
                    <span className="bg-amber-900/80 w-fit rounded-[5px] p-1">
                      카카오톡으로 계속하기
                    </span>
                    <span className="text-black"> 클릭</span>
                  </span>
                </p>
                <p>3. KLIP지갑 비밀번호 설정</p>
                <p>4. 정보제공 확인 클릭!</p>
              </div>
            </div>
          </Modal>
        ) : (
          <div />
        )}
      </div>
      <Howto />
      <Event />
      <div id="Characters">
        <Gallery />
      </div>

      <QnA />
    </main>
  );
}
