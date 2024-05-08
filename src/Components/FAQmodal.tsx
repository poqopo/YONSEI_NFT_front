import { useState } from 'react';
import {
  IoChevronDownCircleSharp,
  IoChevronUpCircleSharp,
} from 'react-icons/io5';

interface FAQModalProps {
  title: string;
  text: string;
  link?: string;
}
export default function FAQModal({ title, text, link }: FAQModalProps) {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="w-full rounded-[16px] bg-[#FFFDF2] border-[3px] border-black p-5">
      <div className="flex place-content-between">
        <h2 className="text-[16px] text-[#191F28] font-bold">{title}</h2>
        <button
          type="button"
          className="my-auto text-[24px]"
          onClick={handleShow}
        >
          {show ? <IoChevronUpCircleSharp /> : <IoChevronDownCircleSharp />}
        </button>
      </div>
      {show ? (
        <div>
          <p className="text-[15px] my-3">{text}</p>
          {link && <a href={link}>{link}</a>}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
