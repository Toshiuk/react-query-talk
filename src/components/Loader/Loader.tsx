import { FC } from "react";

import "./loader.css";
import { Box } from "@mui/joy";

const Loader: FC = () => (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <div className="loader" />
    </Box>
);

export default Loader;
