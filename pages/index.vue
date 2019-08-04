<template lang="pug">
  v-app
    xsOnly(v-if='$vuetify.breakpoint.xsOnly')
    smOnly(v-else-if='$vuetify.breakpoint.smOnly')
    mdAndUp(v-else)

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
