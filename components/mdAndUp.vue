<style lang="scss" scoped>
.cards-scroll-area {
  height: calc(100vh - 48px);
}
</style>

<template lang="pug">
  v-content
    v-container(fluid fill-height align-start)
      v-row.stretch(justify='center')
        v-col(cols=5 lg=4 align-self='stretch')
          v-card.primary(height='100%')
            v-container(fluid fill-height align-start)
              v-row
                v-col
                  optionBtns
                  v-row(justify='center')
                    v-col(cols='auto')
                      div.profile-wrap
                        v-img.profile(:src='require("../static/profile.webp")' aspect-ratio="1" contain height="200px" width="200px")
                  v-row.white--text
                    v-col.text-center
                      div.mb-3.display-1.font-weight-bold {{ $t('info.name') }}
                      div.mb-3.title.font-weight-medium {{ $t('info.job') }}
                  v-divider
                  v-row(justify='center')
                    v-col(cols='auto')
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
        v-col(cols=7 lg=6)
          perfect-scrollbar.cards-scroll-area
            cards
</template>

<script>
import cards from "./cards"
import optionBtns from "./optionBtns"

export default {
  components: {
    cards: cards,
    optionBtns: optionBtns
  }
}
</script>
