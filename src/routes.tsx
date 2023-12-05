import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";

import { SidebarLayout } from "@/layout";
import { Dashboard, Home, ItemList, ItemListOptimistic, Presentation, RequestExamples, SadDashboard } from "@/pages";

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
            {
                path: "/listOptimistic",
                element: <ItemListOptimistic />,
            },
            {
                path: "/requestExamples",
                element: <RequestExamples />,
            },
        ],
    },
    {
        path: "/presentation",
        element: <Presentation />,
    },
];

export const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? "/" : "/react-query-talk" });
