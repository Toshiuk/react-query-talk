import { FC } from "react";

import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Button, Tooltip, Typography } from "@mui/joy";
import { useQueryClient } from "@tanstack/react-query";

import { Loader } from "@/components";

type RequestItemBaseProps = {
    title: string;
    content?: string;
    isLoading?: boolean;
    queryKey: ReadonlyArray<unknown>;
    tooltip?: string;
};

const RequestItemBase: FC<RequestItemBaseProps> = ({ title, content, isLoading = false, queryKey, tooltip }) => {
    const queryClient = useQueryClient();
    const handleClick = () => {
        queryClient.resetQueries({ queryKey });
    };

    return (
        <>
            {tooltip && (
                <Tooltip title={tooltip} sx={{ width: "200px" }}>
                    <QuestionMarkIcon sx={{ position: "absolute", right: 3, top: 3 }} />
                </Tooltip>
            )}
            <Typography level="h2">{title}</Typography>
            {isLoading && <Loader />}
            {!isLoading && (
                <Typography level="body-lg" color="neutral" my={2} textAlign="center">
                    {content || "..."}
                </Typography>
            )}
            <Button onClick={handleClick} disabled={isLoading}>
                Retry
            </Button>
        </>
    );
};

export default RequestItemBase;
