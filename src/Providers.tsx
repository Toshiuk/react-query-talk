import { FC } from "react";

import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";

import { router } from "@/routes.tsx";

const Providers: FC = () => {
    return (
        <CssVarsProvider>
            <CssBaseline />
            <RouterProvider router={router} />
        </CssVarsProvider>
    );
};

export default Providers;
