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
  store: {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {},
    modules: {
      auth: '~/store/auth.js' // Specify the correct path to your auth module
    }
  },
  router: {
    middleware: 'redirectDist',
  },

  // Define a custom middleware for redirection
  middleware: {
    redirectDist({ route, redirect }) {
      if (route.path === '/go') {
        const distParam = route.query.dist || '';
        const redirectPath = `/go/_dist?dist=${distParam}`;
        redirect(redirectPath);
      }
    },
  },
})