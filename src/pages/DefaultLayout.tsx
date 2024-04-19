import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div className="m-auto w-screen max-w-[500px] bg-[#FF9C40]/20">
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
