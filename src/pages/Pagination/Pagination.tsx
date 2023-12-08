import { FC, useEffect, useState } from "react";

import { Box, Button, List, ListItem, Typography } from "@mui/joy";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import api from "@/api";
import { Loader } from "@/components";

type ItemsPaginated = {
    items: string[];
    pageNumber: number;
};

const defaultPagination = { items: [], pageNumber: 0 };

const fetchItems = async (pageNumber: number) => {
    const { data } = await api.get<ItemsPaginated>("/items/paginated", {
        params: {
            pageNumber,
        },
    });

    return data;
};

const Pagination: FC = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const queryClient = useQueryClient();

    const { data: { items } = defaultPagination, isFetching: isFetchingItems } = useQuery({
        queryKey: ["itemsPagination", pageNumber],
        placeholderData: defaultPagination,
        queryFn: () => fetchItems(pageNumber),
    });

    useEffect(() => {
        queryClient.prefetchQuery({
            queryKey: ["itemsPagination", pageNumber + 1],
            queryFn: () => fetchItems(pageNumber + 1),
        });
    }, [pageNumber]);

    return (
        <>
            <Typography level="h1">Pagination</Typography>
            <Box display="flex" flexDirection="column" height="50vh" width="fit-content">
                {!isFetchingItems && !!items?.length && (
                    <List marker="disc">
                        {items.map((item) => (
                            <ListItem key={item}>{item}</ListItem>
                        ))}
                    </List>
                )}
                {isFetchingItems && <Loader />}
                <Box display="flex" gap={4} mt={2}>
                    <Button
                        onClick={() => setPageNumber(pageNumber - 1)}
                        disabled={pageNumber === 0 || isFetchingItems}
                    >
                        Previous page
                    </Button>
                    <Button onClick={() => setPageNumber(pageNumber + 1)} disabled={isFetchingItems}>
                        Next page
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Pagination;
