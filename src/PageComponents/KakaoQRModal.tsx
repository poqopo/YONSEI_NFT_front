import { useEffect, useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import QRCode from 'qrcode.react';
import Modal from '../Components/Modal';

const DEFAULT = 'DEFAULT';

export default function KakaoQRModal() {
  const [qrvalueAuth, setqrvalueAuth] = useState(DEFAULT);

  return (
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
  );
}
