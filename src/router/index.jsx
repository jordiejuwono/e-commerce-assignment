import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const index = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <HomePage />
        }
    ]);

    return <RouterProvider router={router} />
}

export default index;