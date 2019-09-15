<template lang="pug">
  v-content(v-if='$vuetify.breakpoint.smAndDown')
    v-container
      v-row
        v-col
          v-card.primary(height='100%')
            v-container(fluid fill-height align-start)
              v-row
                v-col
                  v-row(justify='center')
                    v-col(cols='auto')
                      div.profile-wrap
                        v-img.profile(:src='require("../static/profile.webp")' aspect-ratio="1" contain height="200px" width="200px")
                  v-row.white--text
                    v-col.text-center
                      div.mb-3.display-1.font-weight-bold {{ $t('info.name') }}
                      div.mb-3.title.font-weight-medium {{ $t('info.job') }}
                v-divider(vertical)
                v-col(cols='auto' align-self='center')
                  v-row.hidden-print-only(justify='center')
                    v-col(cols='auto')
                      v-btn.mx-1(v-for='locale in $i18n.locales' :key="locale.code" :to='switchLocalePath(locale.code)' icon large outlined color='white')
                        client-only
                          v-icon(v-if="locale.code === 'pt'") $vuetify.icons.brFlag
                          v-icon(v-if="locale.code === 'en'") $vuetify.icons.usFlag
                      v-btn.mx-1(@click.stop='$vuetify.theme.dark = !$vuetify.theme.dark' icon large outlined color='white')
                        v-icon {{ invertColors }}
                  v-row
                    v-col.text-start
                      v-btn(text color='white' @click.stop="$store.dispatch('goTo', $t('info.email'))")
                        v-icon.pr-2 mdi-contact-mail
                        span lapprand@gmail.com
                  v-row
                    v-col.text-start
                      v-btn(text color='white' @click.stop="$store.dispatch('goTo', $t('info.github'))")
                        v-icon.pr-2 mdi-github-box
                        span GitHub
                  v-row
                    v-col.text-start
                      v-btn(text color='white' @click.stop="$store.dispatch('goTo', $t('info.linkedin'))")
                        v-icon.pr-2 mdi-linkedin-box
                        span LinkedIn
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
