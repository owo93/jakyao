// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },

    experimental: {
        fonts: [
            {
                name: "JetBrains Mono",
                cssVariable: "--font-jetbrains-mono",
                provider: fontProviders.fontsource(),
                subsets: ["latin"],
                weights: [400],
                fallbacks: ["monospace"],
            },
        ],
    },
});
