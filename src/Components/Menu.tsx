import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface MenuProps {
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ toggleMenu }: MenuProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤 효과를 적용합니다.
    });
  };

  return (
    <div className="fixed w-2/3 max-w-[350px] top-0 h-screen bg-slate-50 z-10 overflow-hidden">
      <div className="w-full flex place-content-end pt-4 pr-4">
        <button
          type="button"
          className="text-[30px]"
          onClick={() => toggleMenu(false)}
        >
          <IoCloseCircleOutline />
        </button>
      </div>

      <div className="my-[50px] text-start ml-6 font-extrabold text-[20px] underline underline-offset-4 scrool-smooth">
        <div className="flex flex-col text-start gap-y-5">
          <button type="button" className="w-fit" onClick={scrollToTop}>
            Home
          </button>
          <a href="#Character">Character</a>
          <a href="#Howto">How to</a>
          <a href="#Event">Event</a>
          <a href="#QNA">QNA</a>
        </div>
      </div>
    </div>
  );
}
export default Menu;
