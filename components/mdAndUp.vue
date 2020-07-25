<style lang="scss" scoped>
.cards-scroll-area {
  height: 100vh;
}

.info-col {
  position: sticky;
  transform: translateY(calc(50vh - 50% - 12px));
  top: 12px;
}
</style>

<template lang="pug">
  v-content
    perfect-scrollbar.cards-scroll-area
      v-container(fluid fill-height)
        v-row.align-self-stretch(justify='center' align='start')
          v-col.info-col(cols=5 lg=4)
            mdAndUpInfo(v-if="windowSize.y > 750")
            xsOnlyInfo(v-else)
          v-col(cols=7 lg=6)
            cards
</template>

<script>
import { mapFields } from "vuex-map-fields"
import cards from "./cards"
import mdAndUpInfo from "./mdAndUpInfo"
import xsOnlyInfo from "./xsOnlyInfo"

export default {
  components: {
    cards: cards,
    mdAndUpInfo: mdAndUpInfo,
    xsOnlyInfo: xsOnlyInfo
  },
  computed: {
    ...mapFields("", ["windowSize"])
  }
}
</script>
