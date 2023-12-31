import { FC, useState } from "react";

import { Box, Button, Input, List, ListItem, Typography } from "@mui/joy";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import api from "@/api";

import Loader from "../../components/Loader/Loader.tsx";

const ItemList: FC = () => {
    const [itemContent, setItemContent] = useState("");
    const queryClient = useQueryClient();

    const {
        data: items,
        isPending: isLoadingItems,
        isFetching: isFetchingItems,
    } = useQuery({
        queryKey: ["items"],
        queryFn: () => api.get<string[]>("/items").then(({ data }) => data),
    });

    const { mutate: addItem, isPending: isLoadingPostItem } = useMutation({
        mutationFn: (content: string) => api.post("/items", { itemContent: content }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["items"] });
        },
    });

    const onAddItem = () => {
        addItem(itemContent);
        setItemContent("");
    };

    return (
        <>
            <Typography level="h1">Item list</Typography>
            <Box display="flex" flexDirection="column">
                {isLoadingItems && <Loader />}
                {!isLoadingItems && !items?.length && (
                    <Typography level="body-lg" color="neutral" my={2}>
                        No items yet :(
                    </Typography>
                )}
                {!isLoadingItems && !!items?.length && (
                    <List marker="disc">
                        {items.map((item) => (
                            <ListItem key={item}>{item}</ListItem>
                        ))}
                    </List>
                )}
                <Box display="flex" gap={1}>
                    <Input
                        value={itemContent}
                        placeholder="Item name"
                        onChange={(e) => setItemContent(e.target.value)}
                    />
                    <Button onClick={onAddItem} disabled={isLoadingPostItem || isFetchingItems}>
                        Add item
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default ItemList;
