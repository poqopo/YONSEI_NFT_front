interface StudentInputProps {
  onChange: (value: string) => void;
  onClick: () => void;
  inputText: string;
  buttonText: string;
}

export function StudentInput({
  onChange,
  onClick,
  inputText,
  buttonText,
}: StudentInputProps) {
  return (
    <div className="px-3 py-1">
      <p className="pb-3 text-[#344054] text-start text-[14px]">학번*</p>
      <input
        type="text"
        placeholder={inputText}
        className="w-full h-[45px] m-auto text-[12px] p-3 rounded-[8px] border-2 border-[#D0D5DD] text-start indent-1"
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="button"
        className="w-full mx-auto my-2 rounded-[15px] bg-[#FEE500] hover:bg-white text-black px-2 py-3 font-bold border-2 border-black"
        onClick={() => onClick()}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default StudentInput;
