import { defineConfig } from "vite";
// import 'vite/modulepreload-polyfill'

export default defineConfig({
    server:{
        port:5173
    },
    build:{
        modulePreload:true,
        outDir:"dist"
    }
});