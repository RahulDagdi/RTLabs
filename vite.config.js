import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: true
  },
  build: {
    chunkSizeWarningLimit: 1500, // default is 500 KB
  },
});
