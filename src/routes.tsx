import { SidebarLayout } from "@/layout";
import { Home, Presentation } from "@/pages";
import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";

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
        ],
    },
    {
        path: "/presentation",
        element: <Presentation />,
    },
];

export const router = createBrowserRouter(routes);
