export default function Event() {
  return (
    <div id="Event" className="h-full flex flex-col place-content-center pb-10">
      <img
        className="mx-auto h-[24px] my-3"
        src="/Event.svg"
        alt="loading..."
      />
      <div className="w-4/5 m-auto text-start">
        <img
          className="mx-auto h-[20px] my-5"
          src="/Event1.svg"
          alt="loading..."
        />
        <div className="font-medium text-[13px] bg-[#FCFCF4] rounded-[15px] p-5 border-[3px] border-black">
          <img
            className="w-full mx-auto my-5 rounded-[8px] border border-black"
            src="gifts.png"
            alt="loading..."
          />
          <ul className="list-decimal text-[15px] font-medium pl-5">
            <li>
              인스타그램에서 팜희를 팔로우해 주세요. <br />
              <span className="font-extrabold">🐥@dokpami.nft</span>
            </li>
            <li className="my-2">
              여러분이 받은 팜희 NFT를 캡쳐한 후, 팜희를 태그해서 스토리에
              공유해 주세요.
            </li>
            <li>추첨을 통해 치킨과 커피, 바나나우유를 드려요!</li>
          </ul>
          <p className="my-2 font-extrabold text-[15px]">
            🩵 이벤트 기간: 5월 9일부터 5월 22일까지 <br /> 💙 결과 발표: 5월
            23일
          </p>
        </div>
      </div>

      <div className="w-4/5 m-auto text-start">
        <img
          className="mx-auto h-[20px] my-5"
          src="/Event2.svg"
          alt="loading..."
        />
        <div className="font-medium text-[13px] bg-[#FCFCF4] rounded-[15px] p-5 border-[3px] border-black">
          <img
            className="w-full mx-auto rounded-[8px] -translate-y-1/4"
            src="friend.png"
            alt="loading..."
          />
          <ul className="list-decimal text-[15px] font-medium pl-5">
            <li>여러분의 NFT를 과 친구에게 소개해주세요.</li>
            <li className="my-2">
              친구가 NFT를 발급했을 때, 여러분의 팜희와 똑같이 생긴 팜둥이 NFT가
              나타날 수도 있어요!
            </li>
            <li>
              팜둥이인걸 확인했다면 이벤트 페이지에서 팜둥이 친구의 학번을
              입력해 주세요.
            </li>
            <li className="my-2">
              이벤트 참여자에겐 친구와 함께 쓸 수 있는 귀여운 타투스티커를
              증정해 드려요.
            </li>
          </ul>
          <p className="my-2 font-extrabold text-[15px] break-words">
            🩵 이벤트 기간: 5월 9일부터 5월 21일까지 <br />
            💙 타투 스티커 수령: 5월 22일(송도), 5월 23일(신촌)
          </p>
        </div>
      </div>
      <div className="w-4/5 m-auto text-start">
        <img
          className="mx-auto h-[20px] my-5"
          src="/Event3.svg"
          alt="loading..."
        />
        <div className="font-medium text-[13px] bg-[#FCFCF4] rounded-[15px] p-5 border-[3px] border-black">
          <ul className="list-decimal text-[15px] font-medium pl-5">
            <li>
              2024 아카라카 기간에 사용할 수 있도록 저희가 팜희 인스타그램
              필터를 준비했어요.
            </li>
            <li className="my-2">
              여러분의 즐거웠던 아카라카의 기억을 팜희 필터와 함께 인스타에
              공유해주세요.
            </li>
            <li>추첨을 통해 경품을 드려요!</li>
          </ul>
          <p className="my-2 font-extrabold text-[15px] break-words">
            🩵 이벤트 기간: 5월 22일부터 5월 27일까지 <br /> 💙 결과 발표: 5월
            28일
          </p>
        </div>
      </div>
    </div>
  );
}
