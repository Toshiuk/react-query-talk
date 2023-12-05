import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import api from "@/api";

import RequestItemBase from "../RequestItemBase/RequestItemBase.tsx";

const queryKey = ["requestSimple"];
const RequestItemSimple: FC = () => {
    const { data, isLoading } = useQuery({
        queryKey,
        queryFn: () => api.get("/content").then(({ data }) => data),
    });

    return <RequestItemBase title="Simple" content={data?.content} isLoading={isLoading} queryKey={queryKey} />;
};

export default RequestItemSimple;
