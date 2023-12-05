import { FC, useEffect, useState } from "react";

import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Typography } from "@mui/joy";

const Home: FC = () => {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(import.meta.env.DEV ? "@/../README.md" : "/react-query-talk/README.md")
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <>
            <Typography level="h1">Home</Typography>
            <Markdown rehypePlugins={[rehypeRaw]}>{markdown}</Markdown>
        </>
    );
};

export default Home;
