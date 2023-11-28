import { router } from "@/routes.tsx";
import { FC } from "react";
import { RouterProvider } from "react-router-dom";

const Providers: FC = () => {
    return <RouterProvider router={router} />;
};

export default Providers;
