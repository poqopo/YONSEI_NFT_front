export default function QnA() {
  return (
    <div className="h-full flex flex-col place-content-center pb-10">
      <h3 className="mt-9 font-bold text-[15px]">Q & A</h3>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          1. 내가 받은 NFT를 어떻게 볼 수 있을까요?
        </h2>
        <p className="font-medium text-[13px]">
          NFT는 클립 지갑에 저장되며 카카오톡 내에서 확인 가능합니다. 자세한
          내용은 아래를 참고해주세요.
        </p>
        <img src="klip.png" alt="loading..." />
      </div>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          2. 블록블록은 어떤 동아리인가요?
        </h2>
        <img className="my-5" src="blockblock.png" alt="loading..." />
        <p className="font-medium text-[13px]">
          블록블록은 지난 2022년 10월, 블록체인을 함께 공부하고 싶은 연세대학교
          학우들이 모여 시작되었습니다. 블록체인으로 돈을 버는 것이 아닌,
          블록체인으로 어떻게 세상을 바꿀 수 있을지 토론하고 공부합니다.
        </p>
      </div>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          3. 타투스티커 판매 수익으로는 무엇을 하나요?
        </h2>
        <p className="font-medium text-[13px]">
          블록블록에서 타투스티커를 판매하는 이유는 NFT를 홍보하기 위함입니다.
          따라서 타투스티커 판매 수익은 최소한의 운영비와 홍보비를 제외하고 전액
          연세대학교에 기부할 예정입니다.
        </p>
      </div>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          4. 앞으로의 MY YONSEI NFT는 어떤 모습일까요?
        </h2>
        <p className="font-medium text-[13px]">
          MY YONSEI NFT는 앞으로도 여러분의 소중한 추억을 기록할 것입니다.
          여러분이 직접 경험하고 느낀 연세를 그리고 공유해주세요. MY YONSEI
          NFT와 함께 여러분의 빛나는 대학생활을, 찬란한 순간을 쌓아가시길
          바랍니다.
        </p>
      </div>
    </div>
  );
}
