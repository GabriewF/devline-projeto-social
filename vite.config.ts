import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { fontless } from "fontless";
export default defineConfig({
    plugins: [
        tailwindcss(),
        fontless({
            defaults: {
              preload: true,
              weights: ['100 900'],
              styles: ['normal', 'italic'],
            },
        }),
        react(),
        babel({ presets: [reactCompilerPreset()] }),
    ],

    server: {
        port: 5000,
    },
});
