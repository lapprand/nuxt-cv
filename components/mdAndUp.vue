<style lang="scss" scoped>
.cards-scroll-area {
  height: 100vh;
}

.info-col {
  position: sticky;
  top: 12px;
}
</style>

<template lang="pug">
  v-content(v-resize="onResize")
    perfect-scrollbar.cards-scroll-area
      v-container(fluid fill-height)
        v-row.align-self-stretch(justify='center' align='start')
          v-col.info-col(cols=5 lg=4)
            mdAndUpInfo
          v-col(cols=7 lg=6)
            cards
</template>

<script>
import cards from "./cards"
import mdAndUpInfo from "./mdAndUpInfo"

export default {
  components: {
    cards: cards,
    mdAndUpInfo: mdAndUpInfo
  },
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0
      }
    }
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    }
  }
}
</script>
