import { FC, useState } from "react";

import { useMutation, useQuery, useQueryClient } from "react-query";
import { Box, Button, Input, List, ListItem, Snackbar, Typography } from "@mui/joy";

import api from "@/api";

import Loader from "../../components/Loader/Loader.tsx";

const ItemListOptimistic: FC = () => {
    const [snackbarError, setSnackbarError] = useState(false);
    const [itemContent, setItemContent] = useState("");
    const queryClient = useQueryClient();

    const { data: items, isFetching: isFetchingItems } = useQuery("items", () =>
        api.get<string[]>("/items").then(({ data }) => data),
    );

    const { mutate: addItem } = useMutation(
        (content: string) => {
            queryClient.setQueryData("items", [...(items || []), content]);
            return api.post("/items/error", { itemContent: content });
        },
        {
            onError: (_, content) => {
                setSnackbarError(true);
                const newItems = queryClient.getQueryData("items") as string[];
                newItems?.splice(newItems.lastIndexOf(content), 1);
                queryClient.setQueryData("items", newItems);
            },
        },
    );

    const onAddItem = () => {
        addItem(itemContent);
        setItemContent("");
    };

    return (
        <>
            <Snackbar
                autoHideDuration={2000}
                open={snackbarError}
                color="danger"
                onClose={() => {
                    setSnackbarError(false);
                }}
            >
                An error occurred while adding the item
            </Snackbar>
            <Typography level="h1">Item list (Optimistic update)</Typography>
            <Box display="flex" flexDirection="column">
                {isFetchingItems && <Loader />}
                {!isFetchingItems && !items?.length && (
                    <Typography level="body-lg" color="neutral" my={2}>
                        No items yet :(
                    </Typography>
                )}
                {!isFetchingItems && !!items?.length && (
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
                    <Button onClick={onAddItem}>Add item</Button>
                </Box>
            </Box>
        </>
    );
};

export default ItemListOptimistic;
