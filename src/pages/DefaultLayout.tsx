import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div className="m-auto w-screen max-w-[500px] bg-[#40C6FF]/20">
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
