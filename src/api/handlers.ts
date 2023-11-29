import { http, HttpResponse } from "msw";

import { MOCKED_BASE_URL } from "@/api/constants.ts";

import delay from "../utils/delay.ts";

export const handlers = [
    http.get(`${MOCKED_BASE_URL}/subscribed`, async () => {
        await delay(2);
        return HttpResponse.json({ isSubscribed: true });
    }),
];
