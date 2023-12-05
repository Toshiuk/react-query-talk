import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import api from "@/api";

import RequestItemBase from "../RequestItemBase/RequestItemBase.tsx";

const queryKey = ["requestRetry"];
const RequestItemRetry: FC = () => {
    const { data, failureCount } = useQuery({
        queryKey,
        queryFn: () => api.get("/content/random").then(({ data }) => data),
        retry: 3,
        throwOnError: true,
    });

    return (
        <RequestItemBase
            title="Retry (3)"
            tooltip="20% success rate, with error boundary"
            content={data?.content || `Try count: ${failureCount}`}
            queryKey={queryKey}
        />
    );
};

export default RequestItemRetry;
