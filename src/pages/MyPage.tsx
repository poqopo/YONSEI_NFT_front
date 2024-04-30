// import { useLocation } from 'react-router-dom'; // 1번 라인
import { FaShareAlt } from 'react-icons/fa';
import { IoDownload } from 'react-icons/io5';
import share from '@/utils/share';

export default function MyPage() {
  // const { state } = useLocation(); // 2번 라인
  // const { url } = state;
  const data = {
    url: 'https://file.notion.so/f/f/58b160c3-fe00-4852-8c42-471415797086/5a906a99-7cab-42f8-9b54-64bbdc3ee1e4/Untitled.png?id=a181325a-9498-4acb-8d88-108bd4bb982a&table=block&spaceId=58b160c3-fe00-4852-8c42-471415797086&expirationTimestamp=1714608000000&signature=1XYKdPJhtpyH21lzfo-zwCvx7Zk6Qa8vNYnCtA9AD2Y&downloadName=Untitled.png',
    text: 'https://file.notion.so/f/f/58b160c3-fe00-4852-8c42-471415797086/5a906a99-7cab-42f8-9b54-64bbdc3ee1e4/Untitled.png?id=a181325a-9498-4acb-8d88-108bd4bb982a&table=block&spaceId=58b160c3-fe00-4852-8c42-471415797086&expirationTimestamp=1714608000000&signature=1XYKdPJhtpyH21lzfo-zwCvx7Zk6Qa8vNYnCtA9AD2Y&downloadName=Untitled.png',
    title: 'Eagle',
  };

  return (
    <div className="min-h-screen flex flex-col place-content-between py-10 gap-y-5 font-roboto text-[#090707]  text-center">
      <div>
        <h2 className=" font-bold text-[15px]">
          연세대학교 블록체인 동아리 <br />
          블록블록과 함께하는
        </h2>
        <h1 className="font-extrabold text-[24px] text-black">MY YONSEI NFT</h1>
      </div>
      <div className="mx-auto">
        <h3 className="font-bold text-center text-[17px]">
          나의 00이를 확인해보세요
        </h3>
        {/* <img
          className="my-3 max-w-[300px] mx-auto"
          src={url}
          // src="logo.png"
          alt="loading..."
        /> */}
        <img className="mx-auto w-[250px]" src="base.png" alt="loading..." />
        <div className="flex place-content-center">
          <a className="mx-auto" href={data.url} download>
            <button
              type="button"
              className="mx-auto font-extrabold rounded-[15px] w-fit px-4 py-3 bg-[#FEE500] text-[#191919]"
            >
              <IoDownload className="m-auto" />
            </button>
          </a>
          <button
            type="button"
            className="mx-auto font-extrabold rounded-[15px] w-fit px-4 py-3 bg-[#FEE500] text-[#191919]"
            onClick={() => share(data)}
          >
            <FaShareAlt className="m-auto" />
          </button>
        </div>
      </div>
      <div className="w-4/5 m-auto">
        <p className="">00이는 카카오톡에서도 확인 가능합니다.</p>
        <a href="kakaotalk://klipwallet/open?url=https://klipwallet.com/">
          <p className="my-5 text-[14px] font-bold text-center underline">
            00이 확인하러가기
          </p>
          <img className="mx-auto w-full" src="/klip.png" alt="loading..." />
        </a>
      </div>
    </div>
  );
}
