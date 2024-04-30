export default function Event() {
  return (
    <div className="h-full flex flex-col place-content-center pb-10">
      <h3 className="mt-9 font-bold text-[20px]">Event</h3>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          EVENT 1. 인스타그램 팔로우 이벤트
        </h2>
        <p className="font-medium text-[13px]">
          <span>@My_Yonsei_NFT 인스타그램 팔로우 하고 기프티콘을 받자!</span>
          <img
            className="w-full mx-auto my-5 rounded-[8px]"
            src="gifts.png"
            alt="loading..."
          />
          <span>팔로워 중 추첨을 통해 </span>
          <span className="font-bold">
            BBQ 황금 올리브 치킨 세트(1명)와 스타벅스 기프티콘(5명)
          </span>
          <span>을 드립니다.</span>
        </p>
      </div>

      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          EVENT 2. 야 너두? 야 나두!
        </h2>
        <p className="font-medium text-[13px]">
          <span>
            캐릭터가 똑같은 친구를 찾으셨나요? 이거 혹시 운명일지도..?!{' '}
          </span>
          <span className="font-bold">
            운명의 그대에게 타투스티커 1장을 드립니다!
          </span>
          <img
            className="w-2/3 mx-auto my-5 rounded-[8px]"
            src="tatoo.png"
            alt="loading..."
          />
        </p>
      </div>
      <div className="w-4/5 m-auto text-start">
        <h2 className="mt-10 mb-5 font-bold text-[15px]">
          EVENT 3. 00이와 함께하는 아카라카!
        </h2>
        <p className="font-medium text-[13px]">
          00이와 함께하는 아카라카 스토리를 @My_Yonsei_NFT를 태그해 올려주세요!
          추첨을 통해 00을 드립니다.
        </p>
      </div>
    </div>
  );
}
