import { Link, Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div className="m-auto w-screen max-w-[500px] bg-[#40C6FF]/20">
      <Link to="/" className="mx-auto w-fit text-center">
        <img
          className="w-[100px] mx-auto py-4"
          src="logo.png"
          alt="loading..."
        />
      </Link>

      <Outlet />
    </div>
  );
}

export default DefaultLayout;
