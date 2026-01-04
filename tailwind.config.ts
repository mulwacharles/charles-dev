import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // This tells Tailwind to look at all files in your app and components folders
  ],
  theme: {
    extend: {
      colors: {
        accent: "#00d1b2", // This adds your teal color as a shortcut
      },
    },
  },
  plugins: [],
};
export default config;