<style lang="scss">
.stretch {
  align-self: stretch;
}
.profile-wrap {
  filter: drop-shadow(0px 4px 8px rgba(50, 50, 50, 0.5));
}
.profile {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
.flag-icon {
  border-radius: 4px;
}
.gradient {
  background: #2193b0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #6dd5ed,
    #2193b0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #6dd5ed,
    #2193b0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

<template lang="pug">
  v-content
    v-container(fluid fill-height align-start)
      v-row.stretch(justify='center')
        v-col(cols=4 align-self='stretch')
          v-card.primary(height='100%')
            v-container(fluid fill-height align-start)
              v-row
                v-col
                  v-row
                    v-col
                      section.hidden-print-only
                        v-row(justify='center')
                          v-col(cols='auto')
                            v-btn.mx-1(v-for='locale in $i18n.locales' :key="locale.code" :to='switchLocalePath(locale.code)' icon outlined)
                              no-ssr
                                v-icon(v-if="locale.code === 'pt'") $vuetify.icons.brFlag
                                v-icon(v-if="locale.code === 'en'") $vuetify.icons.usFlag
                            v-btn.mx-1(icon @click.stop='$vuetify.theme.dark = !$vuetify.theme.dark' outlined)
                              v-icon {{ invertColors }}
                  v-row(justify='center')
                    v-col(cols='auto')
                      div.profile-wrap
                        v-img.profile(src='profile3.png' aspect-ratio="1" height="200px" width="200px")
                  v-row
                    v-col.text-center
                      div.mb-3.display-1.font-weight-bold {{ $t('info.name') }}
                      div.mb-3.title.font-weight-medium {{ $t('info.job') }}
                  v-divider
                  v-row(justify='center')
                    v-col(cols='auto')
                      v-row
                        v-col.text-start
                          v-btn(text @click.stop="goTo($t('info.github'))")
                            v-icon.pr-2 mdi-contact-mail
                            span lapprand@gmail.com
                      v-row
                        v-col.text-start
                          v-btn(text @click.stop="goTo($t('info.github'))")
                            v-icon.pr-2 mdi-github-box
                            span GitHub
                      v-row
                        v-col.text-start
                          v-btn(text @click.stop="goTo($t('info.github'))")
                            v-icon.pr-2 mdi-linkedin-box
                            span LinkedIn
        v-col(cols=8 lg=6)
          cards
</template>

<script>
import cards from "./cards"

export default {
  components: {
    cards: cards
  },
  data() {
    return {
      extended: false,
      invertColors: "mdi-invert-colors",
      tabs: [
        {
          id: 0,
          name: "Sobre",
          icon: "mdi-account"
        },
        {
          id: 1,
          name: "Projetos",
          icon: "mdi-folder-multiple"
        }
      ]
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  mounted() {},
  methods: {
    goTo(url) {
      window.location = url
    }
  }
}
</script>
