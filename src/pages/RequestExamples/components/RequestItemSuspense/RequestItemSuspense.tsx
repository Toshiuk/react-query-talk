import { FC } from "react";

import { useQuery } from "react-query";

import api from "@/api";

import RequestItemBase from "../RequestItemBase/RequestItemBase.tsx";

const queryKey = "requestSuspense";
const RequestItemSuspense: FC = () => {
    const { data, isLoading } = useQuery(queryKey, () => api.get("/content").then(({ data }) => data), {
        suspense: true,
    });

    return <RequestItemBase title="With suspense" content={data?.content} isLoading={isLoading} queryKey={queryKey} />;
};

export default RequestItemSuspense;
