import { FC, useEffect, useState } from "react";

import { Input, List, ListItem, ListItemDecorator, Switch, Tooltip, Typography } from "@mui/joy";
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
    const [secondsToReturn, setSecondsToReturn] = useState(5);
    const [timeLeft, setTimeLeft] = useState(0);
    const [staleTime, setStaleTime] = useState(10);
    const [gcTime, setGcTime] = useState(20);

    const { data, status, fetchStatus, isLoading, isStale } = useQuery({
        queryKey: ["status"],
        queryFn: () => {
            setTimeLeft(secondsToReturn * 60);
            return api.get<string[]>("/status", { params: { returnError, secondsToReturn } }).then(({ data }) => data);
        },
        enabled,
        staleTime: 1000 * staleTime,
        gcTime: 1000 * gcTime,
    });

    useEffect(() => {
        if (timeLeft === 0) {
            return;
        }

        const timerId = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 10);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    const statusItems: StatusItem[] = [
        {
            label: "Success",
            status: status === "success",
            tooltip: "status === 'success' or isSuccess",
        },
        {
            label: "Error",
            status: status === "error",
            tooltip: "status === 'error' or isError",
        },
        {
            label: "Pending",
            status: status === "pending",
            tooltip: "status === 'pending' or isPending",
        },
        {
            label: "Loading",
            status: isLoading,
            tooltip: "isLoading",
        },
        {
            label: "Stale",
            status: isStale,
            tooltip: "isStale",
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
                Return error status (mocked return)
            </Typography>
            <Typography
                component="label"
                mt={1}
                endDecorator={
                    <Input
                        value={secondsToReturn}
                        onChange={(e) => setSecondsToReturn(+(e.target.value || 0))}
                        type="number"
                    />
                }
            >
                Seconds to return (mocked delay)
            </Typography>
            <Typography
                component="label"
                mt={1}
                endDecorator={<Switch sx={{ ml: 1 }} checked={enabled} onChange={() => setEnabled((old) => !old)} />}
            >
                Enabled
            </Typography>
            <Typography
                component="label"
                mt={1}
                endDecorator={
                    <Input value={staleTime} onChange={(e) => setStaleTime(+(e.target.value || 0))} type="number" />
                }
            >
                Stale time (in seconds)
            </Typography>
            <Typography
                component="label"
                mt={1}
                endDecorator={
                    <Input value={gcTime} onChange={(e) => setGcTime(+(e.target.value || 0))} type="number" />
                }
            >
                Garbage collector time (in seconds)
            </Typography>
            <Typography mt={1}>
                Time to retrieve:{" "}
                {Math.floor(timeLeft / 60)
                    .toString()
                    .padStart(2, "0")}
                :{(timeLeft % 60).toString().padStart(2, "0")}
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
                <ListItem>
                    <Typography level="body-lg">Data: {JSON.stringify(data)}</Typography>
                </ListItem>
            </List>
        </>
    );
};

export default Status;
