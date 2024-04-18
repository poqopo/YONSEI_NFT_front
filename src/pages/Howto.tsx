export default function Howto() {
  return (
    <div>
      <h3 className="mt-9 font-bold text-[15px]">HOW TO</h3>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-medium text-[15px]">
          1. 카카오 로그인 클릭
        </h2>
        <img
          className="mx-auto w-2/3"
          src="/kakao_login_pc.png"
          alt="loading..."
        />
        <h2 className="mt-10 mb-5 font-medium text-[15px]">
          2. QR 스캔(PC) or 카카오톡 내 클립 실행
        </h2>
        <p className="mt-10 mb-5 font-medium text-[15px]">
          <span>2. 내 학번 가운데 세자리 (ex.2024</span>
          <span className="font-bold text-red-600">123</span>
          <span>000) 입력 후 발급하기 버튼 클릭</span>
        </p>
        <p className="mt-10 mb-5 font-medium text-[15px]">
          3. 학과명을 확인한 후 NFT 제작 버튼 클릭
        </p>

        <h2 className="mt-10 mb-5 font-medium text-[15px]">
          4. 카카오톡에서 NFT 확인하기
        </h2>

        <h2 className="mt-10 mb-5 font-medium text-[13px]">
          잠깐, 나만의 학교생활을 기록하고 싶으신가요?
          https://open.kakao.com/o/sRr7SKmg 로 문의주세요!
        </h2>
      </div>
    </div>
  );
}
