<template lang="pug">
  v-btn(text color='white' :icon='$vuetify.breakpoint.xsOnly' @click.stop="$emit('click')")
    v-icon(:class="$vuetify.breakpoint.smAndUp ? 'pr-2' : ''") {{ icon }}
    span(v-show='$vuetify.breakpoint.smOnly || ($vuetify.breakpoint.mdAndUp && windowSize.y > 700)') {{ text }}
</template>

<script>
import { mapFields } from "vuex-map-fields"

export default {
  props: {
    icon: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapFields("", ["windowSize"])
  }
}
</script>
