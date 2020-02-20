<template lang="pug">
  v-content(v-if='$vuetify.breakpoint.smAndDown')
    v-container
      v-row
        v-col
          v-card.primary(height='100%')
            v-container.pa-0(fluid fill-height align-start)
              v-row(no-gutters)
                v-col
                  optionBtns
                  v-row(justify='center')
                    v-col(cols='auto')
                      div.profile-wrap
                        v-img.profile(:src='require("../static/profile.webp")' aspect-ratio="1" contain height="160px" width="160px")
                  v-row.white--text
                    v-col.text-center
                      div.mb-3.headline.font-weight-bold {{ $t('info.name') }}
                      div.mb-3.subtitle-1.font-weight-medium {{ $t('info.job') }}
                  v-divider
                  v-row(justify='center')
                    v-col(cols='auto')
                      v-btn(icon color='white' @click.stop="$store.dispatch('goTo', $t('info.email'))")
                        v-icon mdi-contact-mail
                    v-col(cols='auto')
                      v-btn(icon color='white' @click.stop="$store.dispatch('goTo', $t('info.github'))")
                        v-icon mdi-github-box
                    v-col(cols='auto')
                      v-btn(icon color='white' @click.stop="$store.dispatch('goTo', $t('info.linkedin'))")
                        v-icon mdi-linkedin-box
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
