<style lang="scss">
.stretch {
  align-self: stretch;
}
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
  background: #2193b0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #6dd5ed,
    #2193b0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #6dd5ed,
    #2193b0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

<template lang="pug">
  v-app
    xsOnly(v-if='$vuetify.breakpoint.xsOnly')
    smOnly(v-if='$vuetify.breakpoint.smOnly')
    mdAndUp(v-if='$vuetify.breakpoint.mdAndUp')

</template>

<script>
import mdAndUp from "~/components/mdAndUpCards"
import smOnly from "~/components/smOnly"
import xsOnly from "~/components/xsOnly"

export default {
  components: {
    mdAndUp,
    smOnly,
    xsOnly
  }
}
</script>
