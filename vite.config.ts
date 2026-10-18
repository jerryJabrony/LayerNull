import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: '/LayerNull/',
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
