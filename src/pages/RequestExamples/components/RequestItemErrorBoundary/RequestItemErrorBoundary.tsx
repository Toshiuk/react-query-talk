import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import api from "@/api";

import RequestItemBase from "../RequestItemBase/RequestItemBase.tsx";

const queryKey = ["requestErrorBoundary"];
const RequestItemErrorBoundary: FC = () => {
    const { data, isFetching } = useQuery({
        queryKey,
        queryFn: () => api.get("/content/error").then(({ data }) => data),
        throwOnError: true,
    });

    return (
        <RequestItemBase title="Error boundary" content={data?.content} isLoading={isFetching} queryKey={queryKey} />
    );
};

export default RequestItemErrorBoundary;
