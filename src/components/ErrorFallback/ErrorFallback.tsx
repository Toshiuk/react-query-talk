import { FC } from "react";

import { useErrorBoundary } from "react-error-boundary";
import { Button, Typography } from "@mui/joy";

const ErrorFallback: FC = () => {
    const { resetBoundary } = useErrorBoundary();

    return (
        <>
            <Typography level="h3">Error boundary</Typography>
            <Typography>⚠️Something went wrong</Typography>
            <Button onClick={resetBoundary}>Try again</Button>
        </>
    );
};

export default ErrorFallback;
