import { createBrowserRouter } from "react-router-dom";
import HomeProduct from "./pages/product/Index";
import CreateProduct from "./pages/product/create/Index";
import DetailProduct from "./pages/product/detail/Index";
import UpdateProduct from "./pages/product/update/Index";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/home/Index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            
        ],
    },
    {
        path: "/product",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomeProduct />,
            },
            {
                path: "create",
                element: <CreateProduct />,
            },
            {
                path: "detail/:id",
                element: <DetailProduct />,
            },
            {
                path: "update/:id",
                element: <UpdateProduct />,
            }
        ]
    }
]);

export default router;