import { http, HttpResponse } from "msw";

import { MOCKED_BASE_URL } from "@/api/constants.ts";

import delay from "../utils/delay.ts";

const getItems = () => JSON.parse(sessionStorage.getItem("items") || "[]");

export const handlers = [
    http.get(`${MOCKED_BASE_URL}/subscribed`, async () => {
        await delay(2);
        return HttpResponse.json({ isSubscribed: true });
    }),
    http.get(`${MOCKED_BASE_URL}/content`, async () => {
        await delay(2);
        return HttpResponse.json({ content: "Success! This text came from the backend!" });
    }),
    http.get(`${MOCKED_BASE_URL}/content/error`, async () => {
        await delay(2);
        return new HttpResponse(null, { status: 500, statusText: "Internal Server Error" });
    }),
    http.get(`${MOCKED_BASE_URL}/content/random`, async () => {
        await delay(2);
        // random number between 0 and 4 (inclusive)
        const random = Math.floor(Math.random() * 5);
        if (random === 0) return HttpResponse.json({ content: "Success! This text came from the backend!" });
        return new HttpResponse(null, { status: 500, statusText: "Internal Server Error" });
    }),
    http.get(`${MOCKED_BASE_URL}/items`, async () => {
        await delay(2);
        const items = getItems();
        return HttpResponse.json(items);
    }),
    http.post(`${MOCKED_BASE_URL}/items`, async ({ request }) => {
        await delay(2);
        const items = getItems();
        const itemContent = ((await request.json()) as { itemContent: string }).itemContent;
        sessionStorage.setItem("items", JSON.stringify([...items, itemContent]));
        return HttpResponse.json(items);
    }),
    http.post(`${MOCKED_BASE_URL}/items/error`, async () => {
        await delay(2);
        return new HttpResponse(null, { status: 500, statusText: "Internal Server Error" });
    }),
];
