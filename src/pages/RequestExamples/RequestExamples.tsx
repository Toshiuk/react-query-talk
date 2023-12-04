import { Grid, Typography } from "@mui/joy";

import RequestGridItem from "@/pages/RequestExamples/components/RequestGridItem/RequestGridItem.tsx";

import {
    RequestItemError,
    RequestItemErrorBoundary,
    RequestItemRetry,
    RequestItemSimple,
    RequestItemSuspense,
} from "./components";

const RequestExamples = () => {
    return (
        <>
            <Typography level="h1">Request examples</Typography>
            <Grid container spacing={2} my={2}>
                <RequestGridItem>
                    <RequestItemSimple />
                </RequestGridItem>
                <RequestGridItem>
                    <RequestItemSuspense />
                </RequestGridItem>
                <RequestGridItem>
                    <RequestItemError />
                </RequestGridItem>
                <RequestGridItem>
                    <RequestItemErrorBoundary />
                </RequestGridItem>
                <RequestGridItem>
                    <RequestItemRetry />
                </RequestGridItem>
            </Grid>
        </>
    );
};

export default RequestExamples;
