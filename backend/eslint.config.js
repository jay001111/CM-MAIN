import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      js,
    },
    rules: {
      "no-console": "off",
      "no-undef": "off",
    },
    extends: ["plugin:@eslint/js/recommended"],
  }
]);
