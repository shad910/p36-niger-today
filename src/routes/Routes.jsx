import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        errorElement: <div>404 Not Found</div>,
        children: [
            {
                index: true,
                Component: Home
            },
        ],
    },
    {
        path: "auth",
        Component: AuthLayout,
        errorElement: <div>404 Not Found</div>,
        children: [
            {
                path: "login",
                Component: Login
            },
        ],

    }
]);

export default router;