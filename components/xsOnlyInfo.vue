<template lang="pug">
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
              div.mb-3.subtitle-1.font-weight-medium(v-html="$t('info.job')")
          v-divider
          v-row(justify='center')
            v-col(v-for="(infoBtn, index) of infoBtns" :key='index' cols='auto')
              InfoBtn(:icon="infoBtn.icon" :text="infoBtn.text" :windowSize="windowSize" @click="infoBtn.action")
</template>

<script>
import InfoBtn from "./buttons/InfoBtn"
import optionBtns from "./optionBtns"

export default {
  components: {
    optionBtns: optionBtns,
    InfoBtn
  },
  props: {
    windowSize: {
      type: Object,
      default: () => {
        return {
          x: 0,
          y: 0
        }
      }
    }
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

<style></style>
