// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [""],
  pages: true,
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/go',
        component: resolve(__dirname, 'pages/go.vue') // Create a new redirect.vue page
      });
    }
  }
})