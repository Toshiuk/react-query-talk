import { FC } from "react";

import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
                <ReactQueryDevtools buttonPosition="top-right" position="right" />
            </QueryClientProvider>
        </CssVarsProvider>
    );
};

export default Providers;
