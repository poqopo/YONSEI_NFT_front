import { Link, Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div className="m-auto w-screen max-w-[500px] bg-[#A3CCE0] font-sans break-words">
      <Link to="/" className="mx-auto w-fit text-center">
        <img
          className="w-[180px] mx-auto py-6"
          src="/logo.png"
          alt="loading..."
        />
      </Link>

      <Outlet />
    </div>
  );
}

export default DefaultLayout;
