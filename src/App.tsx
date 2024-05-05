import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Mint from './pages/Mint';
import DefaultLayout from './pages/DefaultLayout';
import AfterMinting from './pages/AfterMinting';
import Referral from './pages/Referral';
import MyPage from './pages/MyPage';

function App() {
  const element = useRoutes([
    {
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/Mint/:address',
          element: <Mint />,
        },
        {
          path: '/AfterMint/:address',
          element: <AfterMinting />,
        },
        {
          path: '/Event/:address',
          element: <Referral />,
        },
        {
          path: '/MyPage/:address',
          element: <MyPage />,
        },
      ],
    },
  ]);
  return element;
}

export default App;
