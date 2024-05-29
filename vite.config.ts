import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my_portfolio",
  define: {
    // env variable from env file
    "process.env.VITE_MY_KEY": JSON.stringify(process.env.VITE_MY_KEY),
  },
});
