export default function Howto() {
  return (
    <div>
      <h3 className="mt-9 font-bold text-[20px]">HOW TO</h3>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          1. 카카오 로그인 클릭
        </h2>
        <img
          className="mx-auto w-2/3"
          src="/kakao_login_pc.png"
          alt="loading..."
        />
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          2. 정보 제공 동의(첫 로그인시 비밀번호 설정이 필요합니다.)
        </h2>
        <img
          className="mx-auto max-w-2/3"
          src="/klip_info.png"
          alt="loading..."
        />
        <p className="mt-10 mb-5 font-bold text-[15px]">
          <span>3. 내 학과코드(ex.2024</span>
          <span className="font-bold text-red-600">123</span>
          <span>000)입력 후 발급하기 버튼 클릭</span>
        </p>
        <img className="mx-auto max-w-2/3" src="/major.png" alt="loading..." />
        <p className="text-[12px] indent-3">
          일부 과는 학과코드가 4자리입니다.
        </p>
        <p className="mt-10 mb-5 font-bold text-[15px]">
          3. 학과명을 확인한 후 NFT 제작 버튼 클릭 <br />
          <span className="indent-2 text-[12px]">
            NFT가 랜덤으로 생성됩니다. 나의 NFT와 친구의 NFT를 비교해보세요!
          </span>
        </p>
        <img className="mx-auto max-w-2/3" src="/mint.png" alt="loading..." />
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          4. 카카오톡에서 NFT 확인하기
        </h2>
        <img className="mx-auto max-w-2/3" src="/klip.png" alt="loading..." />
        <h2 className="mt-10 mb-5 font-bold text-[13px]">
          잠깐, 나만의 학교생활을 기록하고 싶으신가요?
          <a href="https://open.kakao.com/o/sRr7SKmg">
            https://open.kakao.com/o/sRr7SKmg
          </a>
          <span>로 문의해주세요!</span>
        </h2>
      </div>
    </div>
  );
}
