// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon"],
  css: ["~/assets/styles/styles.scss"],
  tailwindcss: {
    cssPath: "~/assets/styles/tailwindcss.css",
    exposeConfig: true,
  },
});

