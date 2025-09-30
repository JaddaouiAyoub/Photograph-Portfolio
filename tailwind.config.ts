import type { Config } from "tailwindcss"

export default {
  darkMode: "class", // 👈 obligatoire pour forcer le mode "class"
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
