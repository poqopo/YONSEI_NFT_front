import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import checkAddress from '@/utils/checkParams';
import { captureAndShare } from '@/utils/share';
import CustomButton from '@/Components/Button';

export default function AfterMinting() {
  const params = useParams(); // 2번 라인
  const navigate = useNavigate();

  const { state } = useLocation(); // 2번 라인
  const { major, url } = state;
  const [name, setName] = useState('');

  const toImgSrc = (src: string) => {
    const temp = src.replace('json', 'img');
    return temp.replace('json', 'png');
  };
  const getNFTInfo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setName(json.name);
      })
      .catch(() => {
        window.alert('Error fetching NFT info');
      });
  };
  useEffect(() => {
    checkAddress(params.address);
    getNFTInfo();
  }, []);

  return (
    <div className="h-screen flex flex-col font-roboto text-[#090707] text-center">
      <button
        type="button"
        className="absolute top-5 ml-4 text-[30px]"
        onClick={() => navigate('/')}
      >
        <AiFillHome />
      </button>
      <div className="py-8">
        <div className="w-3/4 m-auto">
          <div className="mx-auto w-4/5 max-w-[300px] p-2 bg-[#FCFCF4] rounded-[20px]">
            <img
              className="mx-auto rounded-[20px]"
              crossOrigin="anonymous"
              src={toImgSrc(url)}
              alt="loading..."
            />
          </div>
          <h2 className="my-4 text-center font-bold text-[20px]">{name}</h2>
          <p className="text-[#090707]">
            {major ? (
              <p>
                나 「 {major} 」 소속이 되어버렸어! <br />
                어느새 심장이 두근거리기 시작했는걸😎 <br /> <br />
              </p>
            ) : (
              <div />
            )}
            아래 공유하기 버튼을 눌러서 <br />
            바로 나, 독팜희를 친구들에게 소개해줘!🐥 <br />
            만약 나랑 똑같이 생긴 쌍둥이 팜둥이를 만나면 <br />
            타투스티커 선물을 줄 테니 얼른 찾아봐!
          </p>
        </div>
      </div>
      <CustomButton
        text="내 독팜희 자랑하기"
        onClick={() => captureAndShare()}
      />
      <CustomButton
        text="팜둥이 찾기 이벤트 참여하기"
        onClick={() => navigate(`/Event/${params.address}`)}
      />
    </div>
  );
}
