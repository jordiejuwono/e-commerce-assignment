import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/home';
import CartPage from '../pages/cart';
import HistoryPage from '../pages/history';

const index = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/history",
          element: <HistoryPage />,
        },
    ]);

    return <RouterProvider router={router} />
}

export default index;