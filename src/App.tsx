import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Mint from './pages/Mint';
import DefaultLayout from './pages/DefaultLayout';
import MyPage from './pages/MyPage';
import Referral from './pages/Referral';
import Claim from './pages/Claim';

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
          path: '/MyPage/:address',
          element: <MyPage />,
        },
        {
          path: '/Event/:address',
          element: <Referral />,
        },
        {
          path: '/Admin/ClaimEvent',
          element: <Claim />,
        },
      ],
    },
  ]);
  return element;
}

export default App;
