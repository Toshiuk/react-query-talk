import { FC } from "react";

import { useQuery } from "react-query";
import { Box, Typography } from "@mui/joy";

import api from "@/api";

import Loader from "../../components/Loader/Loader.tsx";

const Dashboard: FC = () => {
    const { data, isLoading } = useQuery("content", () => api.get("/content").then(({ data }) => data));

    return (
        <>
            <Typography level="h1">Dashboard</Typography>
            <Typography level="h3">I'm happy, I use React query :)</Typography>
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                {isLoading ? <Loader /> : <Typography>{data.content}</Typography>}
            </Box>
        </>
    );
};

export default Dashboard;
