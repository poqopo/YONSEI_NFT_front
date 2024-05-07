import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import checkAddress from '@/utils/checkParams';
import shareImage from '@/utils/share';
import CustomButton from '@/Components/Button';
import { jsonType } from '@/utils/type';

export default function AfterMinting() {
  const params = useParams(); // 2번 라인
  const navigate = useNavigate();

  const { state } = useLocation(); // 2번 라인
  const { url } = state;
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
    <div className="min-h-screen flex flex-col gap-y-5 font-roboto text-[#090707] text-center pb-5">
      <button
        type="button"
        className="absolute top-5 ml-4 text-[30px]"
        onClick={() => navigate('/')}
      >
        <AiFillHome />
      </button>
      <div className="mx-auto w-4/5 max-w-[300px] p-3 bg-[#FCFCF4] rounded-[10px]">
        <img className="mx-auto " src={toImgSrc(url)} alt="loading..." />
      </div>

      <h2 className="my-4 text-center font-bold text-[20px]">{name}</h2>
      <p className="text-[#090707]">
        어라, 얼떨결에 전과해버렸잖아⁉️ <br /> <br /> 오히려 좋아!! <br />{' '}
        새로운 건 언제나 즐거우니까😎 <br /> 이제 우리 더 친해져 보자구! <br />
        아래 공유하기 버튼을 눌러서 <br /> 바로 나 도팜희를 친구들에게
        소개해줘!🐥
      </p>
      <CustomButton text="홈으로 돌아가기" onClick={() => navigate(`/`)} />
      <CustomButton
        text="팜동희 찾기 이벤트 참여하기"
        onClick={() => navigate(`/Event/${params.address}`)}
      />
    </div>
  );
}
