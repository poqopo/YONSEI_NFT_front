import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Mint from './pages/Mint';
import DefaultLayout from './pages/DefaultLayout';

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
      ],
    },
  ]);
  return element;
}

export default App;
