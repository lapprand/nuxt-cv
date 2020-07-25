<template lang="pug">
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
              div.mb-3.title.font-weight-medium(v-html="$t('info.job')")
          v-divider
          v-row(justify='center')
            v-col(cols='auto')
              v-row(v-for="(infoBtn, index) of infoBtns" :key='index')
                v-col.text-start
                  InfoBtn(:icon="infoBtn.icon" :text="infoBtn.text" @click="infoBtn.action")
</template>

<script>
import InfoBtn from "./buttons/InfoBtn"
import optionBtns from "./optionBtns"

export default {
  components: {
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

<style></style>
