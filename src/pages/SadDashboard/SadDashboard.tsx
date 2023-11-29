import { FC, useEffect, useState } from "react";

import { Box, Typography } from "@mui/joy";

import api from "@/api";

import Loader from "../../components/Loader/Loader.tsx";

const SadDashboard: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [content, setContent] = useState(false);
    const getContent = async () => {
        const { data } = await api.get("/content");
        setContent(data.content);
        setIsLoading(false);
    };

    useEffect(() => {
        getContent();
    }, []);

    return (
        <>
            <Typography level="h1">Sad dashboard</Typography>
            <Typography level="h3">I don't use React query :(</Typography>
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                {isLoading ? <Loader /> : <Typography>{content}</Typography>}
            </Box>
        </>
    );
};

export default SadDashboard;
