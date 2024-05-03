import { useCallback, useState } from 'react';
import QRCode from 'qrcode.react';
import { Link, useNavigate } from 'react-router-dom';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { TiThMenu } from 'react-icons/ti';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import Gallery from '../Components/gallery';
import Howto from './Howto';
import Event from './Event';
import { getAddressPC, getAddressMB } from '../utils/klip';
import Modal from '../Components/Modal';
import QnA from './QnA';
import { setAddress } from '@/store/store';
import Menu from '@/Components/Menu';

const DEFAULT_QR_CODE = 'DEFAULT';

export default function Home() {
  const [qrvalueAuth, setqrvalueAuth] = useState(DEFAULT_QR_CODE);
  const [toggleMenu, setToggleMenu] = useState(false);
  const dispatch = useDispatch();
  const userAddress = useSelector((state: any) => state.user.address);
  const navigate = useNavigate();

  const getUserData = () => {
    if (window.innerWidth > 500) {
      getAddressPC(setqrvalueAuth, async (address: string) => {
        dispatch(setAddress(address));
      });
    } else {
      getAddressMB(async (address: string) => {
        dispatch(setAddress(address));
      });
    }
  };

  return (
    <main className="flex flex-col place-content-between font-roboto text-[#090707]  text-center">
      <button
        type="button"
        className="absolute top-5 ml-4 text-[30px]"
        onClick={() => setToggleMenu(true)}
      >
        <TiThMenu />
      </button>

      {toggleMenu ? <Menu toggleMenu={() => setToggleMenu(false)} /> : <div />}
      <div className="w-full rounded-[30px]">
        <div className=" w-[300px] mx-auto ">
          <img src="/sample/2.png" alt="loading..." />
        </div>

        {userAddress === '' ? (
          <div>
            <button
              type="button"
              className="w-2/3"
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
          <div>
            <button
              type="button"
              className="w-2/3 mx-auto my-3 rounded-[15px] bg-[#FEE500] hover:bg-white text-black px-2 py-3 drop-shadow-md font-bold"
              onClick={() => {
                navigate(`/Mint/${userAddress}`);
              }}
            >
              NFT 발급하러 가기
            </button>
            <button
              type="button"
              className="w-2/3 mx-auto my-3 rounded-[15px] bg-[#40C6FF]/40 hover:bg-white text-black px-2 py-3 drop-shadow-md font-bold"
              onClick={() => {
                navigate(`/Event/${userAddress}`);
              }}
            >
              야 너두? 야 나두! 이벤트 참여
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
              <img
                className="w-[100px] mx-auto my-3"
                src="logo.png"
                alt="loading..."
              />
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
                <p className="my-5 font-bold">
                  카메라로 스캔 후, <br />
                  카톡으로 로그인하세요!
                </p>
              </div>
              <div className="w-2/3 text-start font-medium mx-auto text-[13px]">
                <p>1. 카메라로 QR코드 스캔</p>
                <p>2. 카카오톡으로 계속하기 클릭</p>
                <p>3. KLIP지갑에서 사용할 비밀번호 설정</p>
                <p>4. 정보제공 확인 클릭!</p>
              </div>
            </div>
          </Modal>
        ) : (
          <div />
        )}
      </div>

      <h2 className="my-5 font-bold text-[20px] text-black">
        시간이 흘러도 변하지 않는 것은 <br />
        바로 여러분의 추억입니다. <br />
      </h2>
      <p className="font-medium text-[15px]">
        찬란한 당신의 추억을 <br />
        시간이 지나도 기억할 수 있게 <br />
        <span className="font-bold">NFT로 영원히 남겨보세요!</span>
      </p>
      <Howto />
      <Event />
      <div id="Characters">
        <Gallery />
      </div>

      <QnA />
    </main>
  );
}
