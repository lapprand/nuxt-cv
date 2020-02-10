import colors from "vuetify/lib/util/colors"
import en from "./locale/en"
import pt from "./locale/pt"

const pkg = require("./package")

export default {
  head: {
    title: "Arthur Barros Lapprand",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: pkg.description
      }
    ],
    link: []
  },
  plugins: [
    { src: "~/plugins/vuexPersistedState.js", mode: "client" },
    { src: "~/plugins/vueFlagIcon.js", mode: "client" },
    { src: "~/plugins/vuePerfectScrollbar.js", mode: "client" }
  ],
  modules: ["nuxt-i18n"],
  buildModules: ["@nuxtjs/vuetify"],

  i18n: {
    locales: [
      {
        code: "en",
        name: "English"
      },
      {
        code: "pt",
        name: "Português"
      }
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: en,
        pt: pt
      }
    }
  },

  // Vuetify options
  vuetify: {
    defaultAssets: {
      font: {
        family: "Roboto"
      },
      icons: "mdi"
    },
    icons: {
      values: {
        brFlag: {
          component: "flag",
          props: {
            iso: "br"
          }
        },
        usFlag: {
          component: "flag",
          props: {
            iso: "us"
          }
        }
      }
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.lightBlue,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3
        },
        dark: {
          primary: colors.teal,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
