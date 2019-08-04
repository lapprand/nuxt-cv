<template lang="pug">
  v-content(v-if='$vuetify.breakpoint.smAndDown')
    v-container
      v-row
        v-col
          v-card.primary(height='100%')
            v-container.pa-0(fluid fill-height align-start)
              v-row(no-gutters)
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
                        v-img.profile(src='profile3.png' aspect-ratio="1" height="150px" width="150px")
                  v-row
                    v-col.text-center
                      div.mb-3.headline.font-weight-bold {{ $t('info.name') }}
                      div.mb-3.subtitle-1.font-weight-medium {{ $t('info.job') }}
                  v-divider
                  v-row(justify='center')
                    v-col(cols='auto')
                      v-btn(icon @click.stop="goTo($t('info.github'))" small)
                        v-icon mdi-contact-mail
                    v-col(cols='auto')
                      v-btn(icon @click.stop="goTo($t('info.github'))" small)
                        v-icon mdi-github-box
                    v-col(cols='auto')
                      v-btn(icon @click.stop="goTo($t('info.github'))" small)
                        v-icon mdi-linkedin-box
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
  methods: {}
}
</script>
