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
                  optionBtns
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
import optionBtns from "./optionBtns"

export default {
  components: {
    cards: cards,
    optionBtns: optionBtns
  }
}
</script>
