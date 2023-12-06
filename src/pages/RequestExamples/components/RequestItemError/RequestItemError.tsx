import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import api from "@/api";

import RequestItemBase from "../RequestItemBase/RequestItemBase.tsx";

const queryKey = ["requestError"];
const RequestItemError: FC = () => {
    const { data, isPending } = useQuery({
        queryKey,
        queryFn: () => api.get("/content/error").then(({ data }) => data),
    });

    return (
        <RequestItemBase
            title="Error"
            tooltip="refetchOnWindowFocus is true by default, refetching if data is stale"
            content={data?.content}
            isLoading={isPending}
            queryKey={queryKey}
        />
    );
};

export default RequestItemError;
