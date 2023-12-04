import { FC } from "react";

import { useQuery } from "react-query";

import api from "@/api";

import RequestItemBase from "../RequestItemBase/RequestItemBase.tsx";

const queryKey = "requestError";
const RequestItemError: FC = () => {
    const { data, isLoading } = useQuery(queryKey, () => api.get("/content/error").then(({ data }) => data), {});

    return (
        <RequestItemBase
            title="Error"
            tooltip="refetchOnWindowFocus is true by default, refetching if data is stale"
            content={data?.content}
            isLoading={isLoading}
            queryKey={queryKey}
        />
    );
};

export default RequestItemError;
