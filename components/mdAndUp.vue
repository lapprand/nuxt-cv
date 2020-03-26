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
                      v-row(v-for="(infoBtn, index) of infoBtns" :key='index')
                        v-col.text-start
                          InfoBtn(:icon="infoBtn.icon" :text="infoBtn.text" @click="infoBtn.action")
        v-col(cols=7 lg=6)
          perfect-scrollbar.cards-scroll-area
            cards
</template>

<script>
import cards from "./cards"
import optionBtns from "./optionBtns"
import InfoBtn from "./buttons/InfoBtn"

export default {
  components: {
    cards: cards,
    optionBtns: optionBtns,
    InfoBtn
  },
  data() {
    return {
      infoBtns: [
        {
          icon: "mdi-email",
          text: "lapprand@gmail.com",
          action: () => this.$store.dispatch("goTo", this.$t("info.email"))
        },
        {
          icon: "mdi-github",
          text: "GitHub",
          action: () => this.$store.dispatch("goTo", this.$t("info.github"))
        },
        {
          icon: "mdi-linkedin",
          text: "LinkedIn",
          action: () => this.$store.dispatch("goTo", this.$t("info.linkedin"))
        }
      ]
    }
  }
}
</script>
