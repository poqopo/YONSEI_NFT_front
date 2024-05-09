export default function KakaoLoginButton({
  getUserData,
}: {
  getUserData: any;
}) {
  return (
    <div>
      <button
        type="button"
        className="w-3/4 mx-auto -translate-y-full pb-20"
        onClick={() => getUserData()}
      >
        <img
          className="w-full mx-auto"
          src="/kakao_login_pc.png"
          alt="loading..."
        />
      </button>
    </div>
  );
}
