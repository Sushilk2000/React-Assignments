import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  // other config options
  optimizeDeps: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: 'import { h, Fragment } from "preact";',
  },
  // Disable Fast Refresh
  plugins: [react({ fastRefresh: false })],
};
