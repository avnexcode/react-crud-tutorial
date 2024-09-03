import { createBrowserRouter } from "react-router-dom";
import HomeProduct from "./pages/product/Index";
import CreateProduct from "./pages/product/create/Index";
import DetailProduct from "./pages/product/detail/Index";
import UpdateProduct from "./pages/product/update/Index";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/home/Index";
import HomeCategory from "./pages/category/Index";
import CreateCategory from "./pages/category/create";
import DetailCategory from "./pages/category/detail";
import UpdateCategory from "./pages/category/update";

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
    },
    {
        path: "/category",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomeCategory />,
            },
            {
                path: "create",
                element: <CreateCategory />,
            },
            {
                path: "detail/:id",
                element: <DetailCategory />,
            },
            {
                path: "update/:id",
                element: <UpdateCategory />,
            }
        ]
    },
]);

export default router;