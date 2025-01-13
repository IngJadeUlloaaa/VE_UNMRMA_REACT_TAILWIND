import { loadEnv, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };

  return {
    plugins: [react()],
    build: {
      outDir: process.env.BUILDING_PATH
    }
  };
});