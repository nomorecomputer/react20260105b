import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";

export default defineConfig({
  server: { open: true },
  plugins: [react()],
  base: process.env.NODE_ENV === "process" ? "/reaction20260105b/" : "/",
});
