import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import Gallery from '../Components/gallery';
import departmentData from '../utils/department.json';
import { getURL, mintNFT } from '../utils/mintNFT';

export default function Mint() {
  const [input, setInput] = useState('');
  const departmentInfo = departmentData[input as keyof typeof departmentData];

  const [showModal, setShowModal] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  return (
    <main className="h-screen flex flex-col place-content-between gap-y-5 py-8 font-roboto text-[#090707]  text-center">
      <h2 className=" font-bold text-[15px]">
        연세대학교 블록블록과 000이 함께하는
      </h2>
      <h1 className="font-extrabold text-[24px] text-[#30A9DE]">
        MY YONSEI NFT
      </h1>

      {showModal ? (
        <div className="fixed top-1/3 right-1/2 translate-x-1/2 w-4/5 max-w-[500px] bg-[#FEE500] z-50">
          <button
            type="button"
            className="fixed top-[20px] right-[20px] text-[30px]"
            onClick={() => setShowModal(false)}
          >
            <IoCloseCircleOutline />
          </button>
          <div className="py-10 px-5 flex flex-col place-content-between h-full">
            <img
              className="w-[100px] mx-auto my-3"
              src="/logo.png"
              alt="loading..."
            />
            <p className="my-10 text-[13px]">
              선택하신 과는 {departmentInfo.Department_KR}입니다. NFT 제작
              버튼을 누르면 NFT가 제작됩니다.
            </p>
            <button
              type="button"
              className="mx-auto font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#191919] text-[#FFFFFF]"
              onClick={() => {
                setShowModal(false);
                const { imguri, tokenuri } = getURL(
                  departmentInfo.Department,
                  departmentInfo.maxRand,
                );
                mintNFT(params.address, tokenuri);
                window.alert(
                  'NFT 제작 완료! NFT가 전송되기 까지 10~20초가 소요될 수 있습니다.',
                );
                navigate('/MyPage', { state: { url: imguri } });
              }}
            >
              NFT 제작
            </button>
          </div>
        </div>
      ) : (
        <div />
      )}

      <div className="w-full bg-[#D9E1E8]/20 rounded-[30px]">
        <Gallery />
        <div className="my-10 w-4/5 flex place-content-between m-auto ">
          <input
            type="text"
            className="w-2/3 m-auto text-[12px] p-3 rounded-l-[8px] text-start indent-1"
            placeholder="학과 코드 (ex.110)"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="button"
            className="w-1/3 font-extrabold rounded-r-[8px] p-3 bg-[#FEE500] text-[#191919] text-[12px]"
            onClick={() => {
              if (departmentInfo === undefined) {
                window.alert('입력하신 학과가 존재하지 않습니다.');
              } else {
                setShowModal(true);
              }
            }}
          >
            NFT 제작
          </button>
        </div>
      </div>
      <h2 className="my-5 font-bold text-[20px]">
        다시 오지 않을 나의 소중한 학교생활, <br />
        NFT로 영원히 기록하는 건 어떨까요? <br />
      </h2>
      <p className="font-medium text-[13px]">
        AKARAKA, 과 생활, 동아리 등 다양한 추억을 만든 우리 <br />
        이 순간이 영원히 기억되도록 NFT로 남겨보세요. <br />
        찬란한 순간을
        <span className="font-bold"> MY YONSEI NFT</span>가 함께합니다.
      </p>
    </main>
  );
}
