import { defineConfig } from 'vite'
import { alias, vitePlugins } from './src/config'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias,
    },
    plugins: vitePlugins,
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "./src/styles/scss/global.scss" as *;`,
            },
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5172,
    },
})
