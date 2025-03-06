export default defineAppConfig({
  ui: {
    icons: {
      loading: 'i-lucide-loader-circle',
    },
    button: {
      defaultVariants: {
        color: 'neutral',
      },
      slots: {
        base: 'cursor-pointer',
      },
    },
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
  },
  seo: {
    title: 'Nuxt UI Starter - with some sane defaults',
    description:
      'A simple way to start your next Nuxt project with Vueuse, Nuxt UI 3, Fonts and some sane defaults',
  },
});
