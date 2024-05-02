import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/home';
import CartPage from '../pages/cart';
import HistoryPage from '../pages/history';
import HistoryTransactionPage from '../pages/history-transaction';

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
        {
          path: "/history-transaction",
          element: <HistoryTransactionPage />,
        },
    ]);

    return <RouterProvider router={router} />
}

export default index;