<style lang="scss" scoped>
.cards-scroll-area {
  height: 100vh;
}

.info-col {
  position: sticky;
  top: 12px;
}

.sticky-center {
  transform: translateY(calc(50vh - 50% - 12px));
}
</style>

<template lang="pug">
  v-content
    perfect-scrollbar.cards-scroll-area
      v-container#mdAndUpContainer(fluid)
        v-row.align-self-stretch(justify='center' align='start')
          v-col.info-col(cols=5 lg=4 :class="{ 'sticky-center': hasScroll }")
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
    ...mapFields("", ["windowSize"]),
    hasScroll() {
      const mdAndUpContainer = document.getElementById("mdAndUpContainer")
      return (
        this.windowSize.y <
        (mdAndUpContainer ? mdAndUpContainer.clientHeight : 0)
      )
    }
  }
}
</script>
