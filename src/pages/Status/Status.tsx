import { FC, useState } from "react";

import { List, ListItem, ListItemDecorator, Switch, Tooltip, Typography } from "@mui/joy";
import { useQuery } from "@tanstack/react-query";

import api from "@/api";

type StatusItem = {
    label: string;
    status: boolean;
    tooltip: string;
};

const Status: FC = () => {
    const [returnError, setReturnError] = useState(false);
    const [enabled, setEnabled] = useState(true);

    const { status, fetchStatus, isLoading } = useQuery({
        queryKey: ["status"],
        queryFn: () => api.get<string[]>("/status", { params: { returnError } }).then(({ data }) => data),
        enabled,
    });

    const statusItems: StatusItem[] = [
        {
            label: "Success",
            status: status === "success",
            tooltip: "status === 'success' or isStatus",
        },
        {
            label: "Pending",
            status: status === "pending",
            tooltip: "status === 'pending' or isPending",
        },
        {
            label: "Error",
            status: status === "error",
            tooltip: "status === 'error' or isError",
        },
        {
            label: "Loading",
            status: isLoading,
            tooltip: "isLoading",
        },
        {
            label: "Fetching",
            status: fetchStatus === "fetching",
            tooltip: "fetchStatus === 'fetching' or isFetching",
        },
        {
            label: "Fetching is idle",
            status: fetchStatus === "idle",
            tooltip: "fetchStatus === 'idle'",
        },
        {
            label: "Fetching is paused",
            status: fetchStatus === "paused",
            tooltip: "fetchStatus === 'paused'",
        },
    ];

    return (
        <>
            <Typography level="h1">Status</Typography>
            <Typography
                component="label"
                endDecorator={
                    <Switch sx={{ ml: 1 }} checked={returnError} onChange={() => setReturnError((old) => !old)} />
                }
            >
                Return error status
            </Typography>
            <Typography
                component="label"
                mt={1}
                endDecorator={<Switch sx={{ ml: 1 }} checked={enabled} onChange={() => setEnabled((old) => !old)} />}
            >
                Enabled
            </Typography>
            <List sx={{ gap: 3, mt: 1 }}>
                {statusItems.map(({ label, status, tooltip }) => (
                    <ListItem key={label}>
                        <ListItemDecorator>{status ? "🟢" : "🔴"}</ListItemDecorator>
                        <Tooltip title={tooltip} variant="soft">
                            <Typography level="body-lg">{label}</Typography>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default Status;
