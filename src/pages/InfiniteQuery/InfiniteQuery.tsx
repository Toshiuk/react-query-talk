import { FC, useEffect, useRef } from "react";

import { Box, List, ListItem, Typography } from "@mui/joy";
import { useInfiniteQuery } from "@tanstack/react-query";

import api from "@/api";
import { Loader } from "@/components";

const InfiniteQuery: FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const {
        fetchNextPage,
        data,
        isFetching: isFetchingItems,
    } = useInfiniteQuery({
        queryKey: ["itemsInfinite"],
        queryFn: ({ pageParam: pageNumber }) =>
            api
                .get("/items/paginated", {
                    params: {
                        pageNumber,
                    },
                })
                .then(({ data }) => data),
        getNextPageParam: (lastPage) => lastPage.pageNumber + 1,
        initialPageParam: 0,
    });

    const isOnTheBottomOfThePage = () => {
        if (!ref?.current?.parentElement) return false;

        const { scrollTop, scrollHeight, clientHeight } = ref.current.parentElement;

        return scrollTop + clientHeight >= scrollHeight - 20;
    };

    const fetchMore = () => {
        if (isOnTheBottomOfThePage() && !isFetchingItems) {
            console.log("You are at the bottom of the page, loading more items!");
            return fetchNextPage();
        }
    };

    useEffect(() => {
        fetchMore();
        const parentElement = ref?.current?.parentElement;
        if (parentElement) {
            parentElement.addEventListener("scroll", fetchMore);
            return () => parentElement.removeEventListener("scroll", fetchMore);
        }
    }, [isFetchingItems]);

    const items = data?.pages.flatMap((page) => page.items);

    return (
        <>
            <Typography level="h1">Item list</Typography>
            <Box display="flex" flexDirection="column" ref={ref}>
                {!!items?.length && (
                    <List marker="disc">
                        {items.map((item) => (
                            <ListItem key={item}>{item}</ListItem>
                        ))}
                    </List>
                )}
                {isFetchingItems && <Loader />}
            </Box>
        </>
    );
};

export default InfiniteQuery;
