import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  resolve: {
    alias: {
      "react-native": require.resolve("react-native-web"),
      "react-native-reanimated": path.resolve(__dirname, "reanimated-mock.ts"),
    },
    extensions: [".web.tsx", ".web.ts", ".tsx", ".ts", ".web.js", ".js"],
  },
  build: {
    outDir: path.resolve(__dirname, "../dist-e2e"),
    emptyDirBeforeWrite: true,
  },
  server: {
    port: 5173,
  },
});
