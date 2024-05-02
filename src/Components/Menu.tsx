import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface MenuProps {
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ toggleMenu }: MenuProps) {
  const navigate = useNavigate();
  return (
    <div className="fixed w-2/3 max-w-[350px] top-0 h-screen bg-slate-50 z-10 ">
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
        <div className="flex flex-col gap-y-5">
          <button type="button" onClick={() => navigate('#')}>
            Home
          </button>
          <button type="button" onClick={() => navigate('#Howto')}>
            How To
          </button>
          <button type="button" onClick={() => navigate('#Event')}>
            Event
          </button>
          <button type="button" onClick={() => navigate('#Characters')}>
            Characters
          </button>
          <button type="button" onClick={() => navigate('#QNA')}>
            QNA
          </button>
        </div>
      </div>
    </div>
  );
}
export default Menu;
