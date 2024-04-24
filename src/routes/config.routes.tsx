import { RouteObject, createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/app-layout/app-layout";
import WalletsIndexPage from "../pages/wallets";
import DTraderIndexPage from "pages/dtrader";

const routeConfig: RouteObject[] = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { element: <DTraderIndexPage />, index: true },
            { path: "wallets", element: <WalletsIndexPage /> },
        ],
    },
];

export const router = createBrowserRouter(routeConfig);
