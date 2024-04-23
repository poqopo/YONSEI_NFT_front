import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import ReactLoading from 'react-loading';
import Gallery from '../Components/gallery';
import departmentData from '../utils/department.json';
import { getURL, mintNFT } from '../utils/mintNFT';

export default function Mint() {
  const [input, setInput] = useState('');
  const departmentInfo = departmentData[input as keyof typeof departmentData];

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col place-content-between gap-y-3 py-8 font-roboto text-[#090707]  text-center">
      <h2 className=" font-bold text-[15px]">
        연세대학교 블록체인 동아리 <br />
        블록블록과 함께하는
      </h2>
      <h2 className="font-extrabold text-[24px] text-black">MY YONSEI NFT</h2>

      {showModal ? (
        <div className="fixed top-1/3 right-1/2 translate-x-1/2 w-4/5 rounded-[15px] max-w-[500px] bg-[#FEE500] z-50">
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
              <span>선택하신 학과는 </span>
              <span className="font-bold">{departmentInfo.Department_KR}</span>
              <span> 입니다. NFT 제작 버튼을 누르면 NFT가 제작됩니다.</span>
            </p>
            <button
              type="button"
              className="mx-auto font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#191919] text-[#FFFFFF]"
              onClick={async () => {
                setShowModal(false);
                setLoading(true);
                const { imguri, tokenuri } = await getURL(
                  departmentInfo.Department,
                  departmentInfo.maxRand,
                );
                const res = await mintNFT(params.address, tokenuri);
                if (res) {
                  setLoading(false);
                  window.alert('NFT 제작 완료!');
                  navigate('/MyPage', { state: { url: imguri } });
                } else {
                  setLoading(false);
                  window.alert(
                    'NFT 제작에 실패하였습니다. 잠시 후에 다시 시도해주세요.',
                  );
                }
              }}
            >
              NFT 제작
            </button>
          </div>
        </div>
      ) : (
        <div />
      )}

      {loading ? (
        <div>
          <ReactLoading type="bubbles" color="black" className="m-auto" />
          <p>
            NFT를 만들고 있습니다 <br />
            NFT가 만들어질 떄 까지 10~20초가 소요될 수 있습니다.
          </p>
        </div>
      ) : (
        <div className="w-full rounded-[30px]">
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
                  window.alert('입력하신 학과는 아직 준비중입니다.');
                } else {
                  setShowModal(true);
                }
              }}
            >
              NFT 제작
            </button>
          </div>
        </div>
      )}

      <h2 className="my-5 font-bold text-[20px] text-black">
        시간이 흘러도 변하지 않는 것은 <br />
        바로 여러분의 추억입니다. <br />
      </h2>
      <p className="font-medium text-[15px]">
        찬란한 당신의 추억을 <br />
        시간이 지나도 기억할 수 있게 <br />
        <span className="font-bold">NFT로 영원히 남겨보세요!</span>
      </p>
    </main>
  );
}
