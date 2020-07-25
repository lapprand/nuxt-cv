<style lang="scss">
.profile-wrap {
  filter: drop-shadow(0px 4px 2px rgba(50, 50, 50, 0.5));
}
.profile {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
.flag-icon {
  border-radius: 4px;
}
.gradient {
  background: #06beb6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #48b1bf,
    #06beb6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #48b1bf,
    #06beb6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.v-card {
  border-radius: 1rem !important;
}
</style>

<template lang="pug">
  v-app(v-resize="onResize")
    xsOnly(v-if='$vuetify.breakpoint.xsOnly')
    smOnly(v-else-if='$vuetify.breakpoint.smOnly')
    mdAndUp(v-else-if='$vuetify.breakpoint.mdAndUp')

</template>

<script>
import { mapFields } from "vuex-map-fields"
import mdAndUp from "~/components/mdAndUp"
import smOnly from "~/components/smOnly"
import xsOnly from "~/components/xsOnly"

export default {
  components: {
    mdAndUp,
    smOnly,
    xsOnly
  },
  computed: {
    ...mapFields("", ["windowSize"])
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
