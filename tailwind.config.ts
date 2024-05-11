import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/images/herobg.png')",
        "auth": "url('/images/auth.png')",
      },
      fontFamily: {
        perp: ['Perpetua Titling MT', "sans-serif"]
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
};
export default config;
