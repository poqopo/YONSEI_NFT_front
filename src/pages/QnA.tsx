export default function QnA() {
  return (
    <div className="h-full flex flex-col place-content-center pb-[80px]">
      <h3 className="mt-9 font-bold text-[20px]">Q & A</h3>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          1. NFT가 무엇인가요?
        </h2>
        <p className="font-medium text-[13px]">
          NFT는 블록체인 기술로 제작된 독특하고 소중한 디지털 자산입니다. 기존의
          사진이나 물건들처럼 잃어버릴 위험이 있는 것들과 달리,
          <span className="font-bold">NFT는 영구적으로 존재</span>하는 그 특성을
          지니고 있습니다. MY YONSEI NFT 프로젝트는 이러한 NFT의 특성을 활용하여
          <span className="font-bold"> 우리의 소중한 추억들을 영원히 보존</span>
          하고자 합니다.
        </p>
      </div>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          2. 내가 받은 00이를 어떻게 볼 수 있을까요?
        </h2>
        <p className="font-medium text-[13px] mb-5">
          00이는 클립 지갑에 저장되며 카카오톡 내에서 확인 가능합니다. 자세한
          내용은 아래를 참고해주세요.
        </p>
        <img src="klip.png" alt="loading..." />
      </div>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          3. NFT를 더 제작하고 싶어요!
        </h2>
        <p className="font-medium text-[13px]">
          MY YONSEI NFT는 인당 1개의 00이를 분양 받는 것을 기본 원칙으로 하고
          있습니다. 하지만 타투스티커 구매자분들 께는 구매 매수만큼 00이를 더
          분양할 수 있으니 참고해주세요!
        </p>
      </div>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          4. 타투스티커 판매 수익으로는 무엇을 하나요?
        </h2>
        <p className="font-medium text-[13px]">
          MY YONSEI NFT는 NFT를 홍보하기 위해 타투스티커를 판매합니다. 판매
          수익은 필수적인 운영비와 홍보비를 제외한 나머지 전액을 연세대학교에
          기부할 예정입니다.
        </p>
      </div>

      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          5. 앞으로의 MY YONSEI NFT는 어떤 모습일까요?
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
