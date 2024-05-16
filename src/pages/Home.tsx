import { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { TiThMenu } from 'react-icons/ti';
import Select from 'react-select';
import Howto from './Howto';
import Event from './Event';
import { getAddressPC, getAddressMB } from '../utils/klip';
import Modal from '../Components/Modal';
import QnA from './QnA';
import { setAddress } from '@/store/store';
import Menu from '@/Components/Menu';
import { userDetail } from '@/utils/type';
import getMajor from '@/utils/getMajor';
import { addNewUser, getUserByAdress } from '@/utils/axios';
import CustomButton from '@/Components/Button';
import Character from './Character';
import StudentInput from '@/Components/StudentNumberInput';
import PersonalInfo from '@/Components/PersonalInfo';
import groupedOptions from '@/utils/majors';

const DEFAULT = 'DEFAULT';

export default function Home() {
  const [qrvalueAuth, setqrvalueAuth] = useState(DEFAULT);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [userToggle, setUserToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showconfirmModal, setShowConfirmModal] = useState(false);
  const [studentNumber, setStudentNumber] = useState('');
  const [yonsei, setYonsei] = useState(true);
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
        checkInfo(await getUserByAdress(address));
      });
    }
  };
  const NewUser = async (
    _address: string,
    _studentNumber: string,
    _major: string | undefined,
  ) => {
    const res = await addNewUser(_address, _studentNumber, _major);
    if (res.status === 200) {
      setShowConfirmModal(false);
      setUserToggle(false);
      setShowMenu(true);
    } else {
      window.alert(res.result);
    }
  };
  async function searchMajor(input: string) {
    if (input.length !== 10) {
      window.alert('잘못된 학번입니다.');
      setShowConfirmModal(false);
    } else {
      const majorDict = await getMajor(input);
      if (majorDict === undefined) {
        window.alert('입력하신 학과는 아직 준비중입니다.');
        setShowConfirmModal(false);
      } else {
        setMajor(majorDict);
        setShowConfirmModal(true);
      }
    }
  }
  useEffect(() => {
    if (userAddress !== '') {
      getUserByAdress(userAddress).then((info: userDetail) => {
        checkInfo(info);
      });
    }
  }, []);

  // Function that updates student number based on input change
  const handleInputChange = (value: string) => {
    setStudentNumber(value);
  };
  // Function that processes the submitted student number
  const handleSubmit = () => {
    searchMajor(studentNumber);
  };

  const handleSelect = (e: any) => {
    setStudentNumber(`0000${e.value}000`);
  };

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
        <div className="fixed top-1/5 right-1/2 translate-x-1/2 w-5/6 rounded-[12px] max-w-[400px] bg-white z-50 p-5">
          <div className="p-3">
            <h2 className="text-start font-bold text-[18px]">
              여러분의 학번을 입력해주세요!
            </h2>
            <h3 className="text-[#475467] text-[17px] text-start">
              수정할 수 없으니 신중히 확인해 주세요!
            </h3>
          </div>
          {showconfirmModal ? (
            <div>
              <div className="text-[16px] text-start my-2">
                <span className="font-bold">{major?.Department_KR}</span>
                <span> 소속이 맞으신가요?</span>
              </div>
              <div>
                <button
                  type="button"
                  className="mx-auto mt-5 w-full font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#FEE500] text-[#191919] border border-black"
                  onClick={async () => {
                    NewUser(userAddress, studentNumber, major?.Department);
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
              {yonsei ? (
                <div>
                  <h2 className="text-start text-[15px] font-bold p-3">
                    개인정보 수집 동의
                  </h2>
                  <PersonalInfo />
                  <button
                    type="button"
                    className="my-2 text-[11px] underline"
                    onClick={() => setYonsei(false)}
                  >
                    학번을 모르신다면 클릭해주세요!
                  </button>
                  <StudentInput
                    inputText="학번 10자리를 입력해주세요"
                    onChange={handleInputChange}
                    onClick={handleSubmit}
                    buttonText="동의하고 제출하기"
                  />
                </div>
              ) : (
                <div>
                  <Select
                    options={groupedOptions}
                    className="text-start w-full px-5 my-5 mx-auto"
                    onChange={handleSelect}
                    placeholder="여러분의 학과를 선택해주세요"
                  />
                  <CustomButton text="제출하기" onClick={handleSubmit} />
                </div>
              )}
            </div>
          )}
        </div>
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
          <div>
            <button
              type="button"
              className="w-3/4 mx-auto -translate-y-full pb-20"
              onClick={() => getUserData()}
            >
              <img
                className="w-full mx-auto"
                src="/kakao_login_pc.png"
                alt="loading..."
              />
            </button>
          </div>
        )}
        {qrvalueAuth !== DEFAULT ? (
          <Modal>
            <button
              type="button"
              className="fixed top-[20px] right-[20px] text-[30px]"
              onClick={() => setqrvalueAuth(DEFAULT)}
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
      <Character />
      <Howto />
      <Event />

      <QnA />
    </main>
  );
}
