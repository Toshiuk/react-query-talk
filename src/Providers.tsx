import { FC } from "react";

import { RouterProvider } from "react-router-dom";

import { router } from "@/routes.tsx";

const Providers: FC = () => {
    return <RouterProvider router={router} />;
};

export default Providers;
