<template lang="pug">
  v-content
    v-container
      v-row
        v-col
          smOnlyInfo
      cards
</template>

<script>
import cards from "./cards"
import smOnlyInfo from "./smOnlyInfo"

export default {
  components: {
    cards: cards,
    smOnlyInfo: smOnlyInfo
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
