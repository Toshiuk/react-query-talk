import { FC, PropsWithChildren, Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";
import { Grid, Sheet } from "@mui/joy";

import { ErrorFallback, Loader } from "@/components";

const RequestGridItem: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Grid xs={6} sm={4} bgcolor="var(--joy-palette-background-surface)">
            <Sheet
                variant="soft"
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "var(--joy-radius-sm)",
                    height: "200px",
                    justifyContent: "space-between",
                }}
            >
                <Suspense fallback={<Loader />}>
                    <QueryErrorResetBoundary>
                        {({ reset }) => (
                            <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
                                {children}
                            </ErrorBoundary>
                        )}
                    </QueryErrorResetBoundary>
                </Suspense>
            </Sheet>
        </Grid>
    );
};

export default RequestGridItem;
