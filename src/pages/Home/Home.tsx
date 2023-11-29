import { FC, useEffect, useState } from "react";

import { Typography } from "@mui/joy";

import api from "@/api";

const Home: FC = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const getIsSubscribed = async () => {
        const { data } = await api.get("/subscribed");
        setIsSubscribed(data);
    };

    useEffect(() => {
        getIsSubscribed();
    }, []);

    return (
        <>
            <Typography level="h1">Home</Typography>
            <Typography>{isSubscribed ? "Yaaay, now you are!" : "No, you are not subscribed :("}</Typography>
        </>
    );
};

export default Home;
