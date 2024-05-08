import FAQModal from '@/Components/FAQmodal';

export default function QnA() {
  return (
    <div
      id="QNA"
      className="h-full pb-10 w-4/5 flex flex-col m-auto text-start gap-y-10"
    >
      <h3 className="my-9 font-bold text-[20px] text-center">FAQ</h3>
      <FAQModal
        title="NFT란 무엇인가요?"
        text="NFT는 블록체인을 활용하여 영원히 보존하고 사용자가 소유할 수 있도록 만든 디지털 자산이에요. 일반적인 사진이나 그림이 온라인에서 무분별하게 복제되고 쓰이는 것과 달리, NFT는 소유자를 증명하며 영원히 존재한다는 특성이 있어요. MY YONSEI NFT 에서는 이러한 NFT의 특성을 활용하여 여러분들의 소중한 추억들을 영원히 보존하고자 해요. 바로 우리 귀여운 팜희와 함께 말이에요."
      />
      <FAQModal
        title="발급한 팜희를 어떻게 확인할 수 있나요?"
        text="팜희는 카카오톡 안에 내장된 klip이나, Opensea에서 확인할 수 있어요. klip은 카카오톡 어플에서 우측 하단 ‘더보기’ >  ‘전체서비스’ > ‘클립’ 으로 들어갈 수 있어요. Opensea에서는 ‘www.opensea.com’으로 접속해서 검색란에 “[2024 AKARAKA] DOKPAMI EDITION”, 혹은 “DOKPAMI” 만 검색해도 찾을 수 있어요.
        그 외에도 팜희는 Polygon 블록체인에서 살고 있기 때문에 Polygon을 지원하는 곳에선 어디서나  확인할 수 있어요!"
      />
      <FAQModal
        title="팜희 NFT를 더 만들고 싶어요!"
        text="MY YONSEI NFT에서는 인당 1개의 팜희만 받을 수 있도록 제한하고 있어요. 팜희를 더 받고 싶으신 분들을 위해, MY YONSEI NFT 팀에서 제작하는 아카라카 기념 타투스티커를 구매하신 분께는 구매 매수만큼 팜희 NFT를 더 받을 수 있는 기회를 드리고 있어요!"
      />
      <FAQModal
        title="타투스티커가 궁금해요!"
        text="팜희와 함께하는 시간을 더 즐겁게 추억하기 위해 타투스티커를 제작했어요. 운영비와 홍보비를 제외한 모든 판매 수익 전액은 연세대학교에 기부할 예정이에요:) 타투스티커 구매처 및 세부 사항은 아래 링크에서 확인할 수 있어요."
        link="https://forms.gle/2iCWLzTd5AfSDDPr8"
      />
    </div>
  );
}
