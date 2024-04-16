import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Mint from './pages/Mint';
import DefaultLayout from './pages/DefaultLayout';
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
          path: '/MyPage',
          element: <MyPage />,
        },
      ],
    },
  ]);
  return element;
}

export default App;
