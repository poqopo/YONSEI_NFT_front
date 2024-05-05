export default function CustomButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="w-3/4 mx-auto my-2 rounded-[15px] bg-[#FEE500] hover:bg-white text-black px-2 py-3 font-bold border-2 border-black"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
