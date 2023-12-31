module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "react", "simple-import-sort"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "simple-import-sort/imports": [
            "warn",
            {
                groups: [["^react$"], ["^[^/@.].*$", "^@[^/]"], ["^@/"]],
            },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn"
    },
}
