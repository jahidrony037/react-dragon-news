import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import "./index.css";
import Root from "./layouts/Root/Root.jsx";
import router from "./routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <RouterProvider router={router}>
        <Root />
      </RouterProvider>
      <ToastContainer />
    </AuthProvider>
  </>
);
