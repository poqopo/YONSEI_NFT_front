export default function Howto() {
  return (
    <div id="Howto">
      <img
        className="mx-auto h-[24px] my-3"
        src="/HowTo.svg"
        alt="loading..."
      />{' '}
      <ul className="list-decimal w-3/4 mx-auto mt-10 text-start">
        <li className=" mb-5 font-medium text-[15px]">
          가장 먼저 카카오 로그인을 해주세요.
          <img
            className="mx-auto my-5 w-3/4"
            src="/kakao_login_pc.png"
            alt="loading..."
          />
        </li>
        <li className=" mb-5 font-medium text-[15px]">
          klip에서 정보 제공 동의를 해주세요. <br />
          klip을 처음 이용하신다면 비밀번호 설정이 필요할 수 있어요.
          <img
            className="mx-auto my-5 w-3/4 rounded-md "
            src="/klipInfo.png"
            alt="loading..."
          />
        </li>

        <li className=" mb-5 font-medium text-[15px]">
          여러분의 학번 10자리(ex 2024123456)를 입력 후, 학과를 확인해주세요!
          <img
            className="mx-auto my-5 w-3/4 rounded-md"
            src="/studentNumber.png"
            alt="loading..."
          />
          <img
            className="mx-auto my-5 w-3/4 rounded-md  "
            src="/confirmMajor.png"
            alt="loading..."
          />
        </li>

        <li className=" mb-5 font-medium text-[15px]">
          NFT 발급하기 버튼을 누른 후, <br />
          우리 과 독팜희 NFT 받기를 눌러주세요!
          <img
            className="mx-auto my-5 w-3/4 rounded-md"
            src="/mintInfo.png"
            alt="loading..."
          />
        </li>

        <li className=" mb-5 font-medium text-[15px]">
          10~20초정도 기다려주면... <br />
          여러분의 과로 전과한 파미 등장🐥 <br /> 발급한 NFT는 klip과
          Opensea에서도 확인할 수 있어요.
          <img
            className="mx-auto my-5 w-3/4 rounded-md"
            src="/afterMint.png"
            alt="loading..."
          />
        </li>
        {/* 
        <img className="mx-auto max-w-2/3" src="/klip.png" alt="loading..." />
        <a href="kakaotalk://klipwallet/open?url=https://klipwallet.com/">
          <p className="mt-5 text-[14px] font-medium text-center underline">
            NFT 확인하러가기
          </p>
        </a> */}
      </ul>
    </div>
  );
}
