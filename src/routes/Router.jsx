import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Test from "../components/Test";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import NewsDetail from "../pages/NewsDetail/NewsDetail";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetail />
          </PrivateRoute>
        ),
        loader: (params) => fetch(`/news.json/${params.params.id}`),
      },
      {
        path: "/category/:id",
        element: <Home />,
        loader: (params) => fetch(`/category/${params.params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/test",
        element: (
          <PrivateRoute>
            <Test />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
