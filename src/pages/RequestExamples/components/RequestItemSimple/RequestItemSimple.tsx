import { FC } from "react";

import { useQuery } from "react-query";

import api from "@/api";

import RequestItemBase from "../RequestItemBase/RequestItemBase.tsx";

const queryKey = "requestSimple";
const RequestItemSimple: FC = () => {
    const { data, isLoading } = useQuery(queryKey, () => api.get("/content").then(({ data }) => data));

    return <RequestItemBase title="Simple" content={data?.content} isLoading={isLoading} queryKey={queryKey} />;
};

export default RequestItemSimple;
