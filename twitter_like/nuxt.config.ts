// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxthq/ui', 'nuxt-icon'],

  // https://nuxt.com/docs/migration/runtime-config#runtime-config
  runtimeConfig: {
    // Private config that is only available on the server
    PASSWORD: process.env.PASSWORD,
    // Config within public will be also exposed to the client
    public: {
      TOKEN: process.env.TOKEN,
    }
  },
})
