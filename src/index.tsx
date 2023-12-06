import React from "react";

import ReactDOM from "react-dom/client";

import { MOCKED_BASE_URL } from "@/api/constants.ts";
import Providers from "@/Providers.tsx";

async function enableMocking() {
    const { worker } = await import("@/api/browser");

    return worker.start({
        serviceWorker: {
            url: "./mockServiceWorker.js",
        },
        onUnhandledRequest(req, print) {
            if (!req.url.toString().startsWith(MOCKED_BASE_URL)) return;

            print.warning();
        },
    });
}

enableMocking().then(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
            <Providers />
        </React.StrictMode>,
    );
});
