export default function Character() {
  return (
    <div id="Character" className="h-screen flex flex-col pb-10">
      <img className="mx-auto w-3/4" src="/intro.png" alt="loading..." />
      <p className="w-3/4 mx-auto text-start">
        안녕, 난 독팜희라고 해!
        <br /> 친구들은 편하게 파미라고 불러.
        <br /> 날개가 너무 작아서 아직 날지 못하는
        <br /> 아기 독수리지만 괜찮아.
        <br /> 날지 못해도 세상은 신나는 것들로 가득한 걸!
        <br /> 혹시… 나랑 같이 비행 연습하지 않을래?
      </p>
    </div>
  );
}
