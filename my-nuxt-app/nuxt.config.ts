export default defineNuxtConfig({
  css: ["~/styles/global.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    strict: true
  },

  compatibilityDate: "2025-04-03",
});