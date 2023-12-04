import { FC } from "react";

import { useQuery } from "react-query";

import api from "@/api";

import RequestItemBase from "../RequestItemBase/RequestItemBase.tsx";

const queryKey = "requestErrorBoundary";
const RequestItemErrorBoundary: FC = () => {
    const { data, isFetching } = useQuery(queryKey, () => api.get("/content/error").then(({ data }) => data), {
        useErrorBoundary: true,
    });

    return (
        <RequestItemBase title="Error boundary" content={data?.content} isLoading={isFetching} queryKey={queryKey} />
    );
};

export default RequestItemErrorBoundary;
