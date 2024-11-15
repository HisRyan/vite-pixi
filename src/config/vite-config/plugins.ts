/**
 * create by haojie.Li
 * Data: 2024/15/18 15:39:33
 * For: vite plugin 插件配置
 */
import vue from "@vitejs/plugin-vue";
import usePluginImport from "vite-plugin-importer";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export const vitePlugins = [
  vue(),
  usePluginImport({
    libraryDirectory: "es",
    style: "css",
    libraryName: "ant-design-vue",
  }),
  Components({
    resolvers: [AntDesignVueResolver()],
  }),
];
