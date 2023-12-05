import { FC } from "react";

import { useSuspenseQuery } from "@tanstack/react-query";

import api from "@/api";

import RequestItemBase from "../RequestItemBase/RequestItemBase.tsx";

const queryKey = ["requestSuspense"];
const RequestItemSuspense: FC = () => {
    const { data, isLoading } = useSuspenseQuery({
        queryKey,
        queryFn: () => api.get("/content").then(({ data }) => data),
    });

    return <RequestItemBase title="With suspense" content={data?.content} isLoading={isLoading} queryKey={queryKey} />;
};

export default RequestItemSuspense;
