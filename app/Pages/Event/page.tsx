"use client";

export default function Event() {
  return (
    <div className="h-screen flex flex-col place-content-center pb-10">
      <h3 className="mt-9 font-bold text-[15px]">Event</h3>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          EVENT 1. 내가 받은 NFT를 친구들에게 자랑하고 치킨 기프티콘을
          받아가세요!
        </h2>
        <p className="font-medium text-[13px]">
          1. @blockblock_yonsei 팔로우 <br />
          2. 내가 받은 NFT를 블록블록 태그 해서 스토리에 공유
        </p>
      </div>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          EVENT 2. 타투스티커 증정 이벤트
        </h2>
        <p className="font-medium text-[13px]">
          5/20~5/24 기간동안, NFT 발급자를 대상으로 과 특색이 담긴 독수리
          타투스티커 증정 (장소 추후 공지)
        </p>
      </div>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          EVENT 3. 아카라카 인증 이벤트
        </h2>
        <p className="font-medium text-[13px]">
          타투스티커, NFT와 함께 아카라카를 즐기고 @blockblock_yonsei를 태그해서
          스토리를 올려주세요!
        </p>
      </div>
      <p className="w-4/5 text-start m-auto font-medium text-[13px]">
        아카라카 후, 나만의 디자인으로 NFT를 제작할 수있는 커스터마이징
        이벤트에도 많은 관심 부탁드립니다!
      </p>
    </div>
  );
}
