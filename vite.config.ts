/*
 * @create: by haojie.Li
 * @Date: 2024-05-27 16:15:07
 * @For:
 */
import path from "path";
import { defineConfig } from "vite";
import { alias } from "./src/config";
import vue from "@vitejs/plugin-vue";
import usePluginImport from "vite-plugin-importer";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias,
  },
  plugins: [
    vue(),
    visualizer({
      open: true,
    }),

    usePluginImport({
      libraryDirectory: "es",
      style: "css",
      libraryName: "ant-design-vue",
    }),
    AutoImport({
      imports: ["vue"],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/typings/auto-imports.d.ts",
    }),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${path.resolve(__dirname, "src/styles/less/global.less")}";`,
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 9990,
  },
});
