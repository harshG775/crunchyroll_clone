import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            minWidth: {
                "8xl": "96rem",
            },
            maxWidth: {
                "8xl": "96rem",
            },
            colors: {
                text: "hsl(var(--text) / <alpha-value>)",
                background: "hsl(var(--background) / <alpha-value>)",
                primary: "hsl(var(--primary) / <alpha-value>)",
                secondary: "hsl(var(--secondary) / <alpha-value>)",
                accent: "hsl(var(--accent) / <alpha-value>)",
            },
        },
    },
    plugins: [],
};
export default config;
