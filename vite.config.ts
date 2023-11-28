// https://vitejs.dev/config/
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react({ jsxImportSource: "@emotion/react" }),
        mdx({
            jsxImportSource: "@emotion/react",
            providerImportSource: "@mdx-js/react",
            remarkPlugins: [rehypeMdxCodeProps],
        }),
        tsconfigPaths(),
    ],
});
