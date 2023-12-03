import { FC } from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";

import { router } from "@/routes.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            staleTime: 5 * 60 * 1000 /* 5 min */,
        },
    },
});
const Providers: FC = () => {
    return (
        <CssVarsProvider>
            <QueryClientProvider client={queryClient}>
                <CssBaseline />
                <RouterProvider router={router} />
            </QueryClientProvider>
        </CssVarsProvider>
    );
};

export default Providers;
