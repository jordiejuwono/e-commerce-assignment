import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/home';
import CartPage from '../pages/cart';

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
    ]);

    return <RouterProvider router={router} />
}

export default index;