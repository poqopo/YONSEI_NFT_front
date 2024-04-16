import { useState } from 'react';
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import Gallery from '../Components/gallery';
import Howto from './Howto';
import Event from './Event';
import { getAddressPC, getAddressMB } from '../utils/klip';
import Modal from '../Components/Modal';

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
    <main className="flex flex-col place-content-between gap-y-5 mt-8 font-roboto text-[#090707]  text-center">
      <h2 className=" font-bold text-[15px]">
        연세대학교 블록체인 동아리 <br />
        블록블록과 함께하는
      </h2>
      <h1 className="font-extrabold text-[24px] text-[#30A9DE]">
        MY YONSEI NFT
      </h1>
      <h2 className="font-bold text-[15px]">AKARAKA EVENT</h2>

      <div className="w-full bg-[#D9E1E8]/20 rounded-[30px]">
        <Gallery />
        <div className="my-10">
          <button
            type="button"
            className="max-[600px]:hidden mx-auto font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#30A9DE] text-[#D9E1E8]"
            onClick={() => getUserDataPC()}
          >
            NFT 발급하고 타투스티커 받기
          </button>
          <button
            type="button"
            className="min-[600px]:hidden mx-auto font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#30A9DE] text-[#D9E1E8]"
            onClick={() => getUserDataMB()}
          >
            TEST{' '}
          </button>
        </div>
        {qrvalueAuth !== DEFAULT_QR_CODE ? (
          <Modal>
            <button
              type="button"
              className="text-end text-black"
              onClick={() => setqrvalueAuth(DEFAULT_QR_CODE)}
            >
              X
            </button>
            <div>
              <QRCode
                value={qrvalueAuth}
                size={200}
                style={{ margin: 'auto' }}
              />
            </div>
            <p className="mt-10 ">
              카메라로 스캔 후, 카카오톡 로그인을 해주세요!
            </p>
          </Modal>
        ) : myAddress !== DEFAULT_ADDRESS ? (
          <p>{myAddress}</p>
        ) : (
          <div />
        )}
      </div>
      <h3 className="mt-4 font-bold text-[15px]">ABOUT</h3>
      <h2 className="mb-5 font-bold text-[20px]">
        나의 과 특징을 살린 NFT와 함께 <br /> 2024 AKARAKA를 즐겨보세요!
      </h2>
      <p className="font-medium text-[13px]">
        2024 AKARAKA를 더욱 특별하게 보낼 수 있도록 <br />
        다양한 모습을 가진 NFT와 타투스티커를 준비했습니다. <br /> 서로의 NFT를
        공유해보며 더 재밌는 AKARAKA를 보내보아요!
      </p>
      <Howto />
      <Event />
    </main>
  );
}
