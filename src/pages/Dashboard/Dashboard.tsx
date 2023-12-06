import { FC } from "react";

import { Box, Typography } from "@mui/joy";
import { useQuery } from "@tanstack/react-query";

import api from "@/api";

import Loader from "../../components/Loader/Loader.tsx";

const Dashboard: FC = () => {
    const { data, isPending } = useQuery({
        queryKey: ["content"],
        queryFn: () => api.get("/content").then(({ data }) => data),
    });

    return (
        <>
            <Typography level="h1">Dashboard</Typography>
            <Typography level="h3">I'm happy, I use React query :)</Typography>
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                {isPending ? <Loader /> : <Typography>{data.content}</Typography>}
            </Box>
        </>
    );
};

export default Dashboard;
