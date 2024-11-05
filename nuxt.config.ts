// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-quasar-ui'],
  typescript: { typeCheck: true },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  quasar: {
    plugins: ['Notify'],
    config: {
      notify: {
        position: 'top-right',
      },
    },
  },
  imports: {
    presets: [{ from: 'vue-i18n', imports: ['useI18n'] }],
  },
});
