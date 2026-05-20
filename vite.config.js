import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: true, // Listen on all network interfaces
    // port: 5173, // Specify the port you want to use
      // open: true, // Automatically open the app in the browser
      
  },
  build: {
    chunkSizeWarningLimit: 1500, // default is 500 KB
  },
});
