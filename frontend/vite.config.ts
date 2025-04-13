import {fileURLToPath, URL} from 'node:url'
import {resolve} from "path"
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    base: "/static/",
    build: {
        manifest: true,
        outDir: resolve("./dist-resources"),
        rollupOptions: {
            input: {
                welcome: "./src/pages/welcome/Welcome.ts"
            }
        }
    }
})
