import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Relative asset paths, so the build works at a domain root and under
  // https://<user>.github.io/<repo>/ alike.
  base: "./",
  plugins: [react(), tailwindcss()],
  server: { port: 5173 },
});
