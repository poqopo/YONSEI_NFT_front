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

const DEFAULT_QR_CODE = 'DEFAULT';

export default function Home() {
  const navigate = useNavigate();
  const [qrvalueAuth, setqrvalueAuth] = useState(DEFAULT_QR_CODE);

  const getUserDataPC = () => {
    getAddressPC(setqrvalueAuth, async (address: string) => {
      navigate(`/Mint/${address}`);
    });
  };

  const getUserDataMB = () => {
    getAddressMB(async (address: string) => {
      navigate(`/Mint/${address}`);
    });
  };

  return (
    <main className="flex flex-col place-content-between gap-y-2 pt-8 font-roboto text-[#090707]  text-center">
      <h2 className=" font-bold text-[15px]">
        연세대학교 블록체인 동아리 <br />
        블록블록과 함께하는
      </h2>
      <h1 className="font-extrabold text-[24px] text-black">MY YONSEI NFT</h1>

      <div className="w-full rounded-[30px]">
        <Gallery />
        <div className="my-10">
          <button
            type="button"
            className="w-2/3"
            onClick={() =>
              window.innerWidth > 500 ? getUserDataPC() : getUserDataMB()
            }
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
      <QnA />
    </main>
  );
}
