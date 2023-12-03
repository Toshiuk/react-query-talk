import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";

import { SidebarLayout } from "@/layout";
import { Dashboard, Home, ItemList, Presentation, SadDashboard } from "@/pages";

const routes: RouteObject[] = [
    {
        path: "/",
        element: (
            <SidebarLayout>
                <Outlet />
            </SidebarLayout>
        ),
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/saddashboard",
                element: <SadDashboard />,
            },
            {
                path: "/list",
                element: <ItemList />,
            },
        ],
    },
    {
        path: "/presentation",
        element: <Presentation />,
    },
];

export const router = createBrowserRouter(routes);
