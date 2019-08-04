<template lang="pug">
  v-app
    smAndDown(v-if='$vuetify.breakpoint.smAndDown')
    mdAndUp(v-else)

</template>

<script>
import mdAndUp from "~/components/mdAndUpCards"
import smAndDown from "~/components/smAndDown"

export default {
  components: {
    mdAndUp,
    smAndDown
  }
}
</script>
