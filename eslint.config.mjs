import { defineConfig } from "eslint-define-config";

export default defineConfig({
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["next/core-web-vitals", "plugin:tailwindcss/recommended"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "tailwindcss/no-custom-classname": "off",
  },
});