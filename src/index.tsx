import React from "react";

import ReactDOM from "react-dom/client";

import Providers from "@/Providers.tsx";

async function enableMocking() {
    const { worker } = await import("@/api/browser");

    return worker.start({
        serviceWorker: {
            url: "./mockServiceWorker.js",
        },
        onUnhandledRequest(req, print) {
            if (/\.(svg|js|png)/.test(req.url)) return;

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
