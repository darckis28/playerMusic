/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cardground: "#212936",
        grayOne: "#4D5562",
      },
    },
  },
  plugins: [],
};
