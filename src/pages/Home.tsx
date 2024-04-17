import { useState } from 'react';
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { IoCloseCircleOutline } from 'react-icons/io5';
import Gallery from '../Components/gallery';
import Howto from './Howto';
import Event from './Event';
import { getAddressPC, getAddressMB } from '../utils/klip';
import Modal from '../Components/Modal';
import QnA from './QnA';

// QR코드와 지갑 주소를 초기화
const DEFAULT_QR_CODE = 'DEFAULT';
const DEFAULT_ADDRESS = '0x00000000000000000000000000000';

export default function Home() {
  const navigate = useNavigate();
  const [qrvalueAuth, setqrvalueAuth] = useState(DEFAULT_QR_CODE);
  const [myAddress, setMyAddress] = useState(DEFAULT_ADDRESS);

  // 지갑 연동하는 함수 실행
  const getUserDataPC = () => {
    getAddressPC(setqrvalueAuth, async (address: string) => {
      setMyAddress(address);
      navigate(`/Mint/${address}`);
    });
  };

  const getUserDataMB = () => {
    getAddressMB(async (address: string) => {
      setMyAddress(address);
      navigate(`/Mint/${address}`);
    });
  };

  return (
    <main className="flex flex-col place-content-between gap-y-2 mt-8 font-roboto text-[#090707]  text-center">
      <h2 className=" font-bold text-[15px]">
        연세대학교 블록체인 동아리 <br />
        블록블록과 함께하는
      </h2>
      <h1 className="font-extrabold text-[24px] text-[#30A9DE]">
        MY YONSEI NFT
      </h1>

      <div className="w-full bg-[#D9E1E8]/20 rounded-[30px]">
        <Gallery />
        <div className="my-10">
          <button
            type="button"
            className="max-[500px]:hidden w-2/3"
            onClick={() => getUserDataPC()}
          >
            <img
              className="w-full"
              src="/kakao_login_pc.png"
              alt="loading..."
            />
          </button>
          <button
            type="button"
            className="min-[500px]:hidden w-2/3"
            onClick={() => getUserDataMB()}
          >
            <img
              className="w-full"
              src="/kakao_login_pc.png"
              alt="loading..."
            />
          </button>
        </div>
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
                  카톡으로 간편가입하세요!
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
        ) : myAddress !== DEFAULT_ADDRESS ? (
          <p>{myAddress}</p>
        ) : (
          <div />
        )}
      </div>
      <h2 className="my-5 font-bold text-[20px]">
        다시 오지 않을 이 순간, <br />
        NFT로 영원히 남겨보세요 <br />
      </h2>
      <p className="font-medium text-[13px]">
        AKARAKA, 과 생활, 동아리 등 다양한 추억을 만든 우리 <br />
        이 순간이 영원히 기억되도록 NFT로 남겨보세요. <br />
        찬란한 순간을
        <span className="font-bold"> MY YONSEI NFT</span>가 함께합니다.
      </p>
      <Howto />
      <Event />
      <QnA />
    </main>
  );
}
