import { FC } from "react";

import { Box, CircularProgress } from "@mui/joy";

const Loader: FC = () => (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <CircularProgress />
    </Box>
);

export default Loader;
