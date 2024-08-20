// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  devtools: { enabled: true },
  imports: {
    autoImport: false,
  },
  modules: ["@nuxtjs/tailwindcss"],
  compatibilityDate: "2024-04-03",
});
