<template lang="pug">
  v-btn(text color='white' :icon='$vuetify.breakpoint.xsOnly' @click.stop="$emit('click')")
    v-icon(:class="$vuetify.breakpoint.smAndUp ? 'pr-2' : ''") {{ icon }}
    span(v-show='$vuetify.breakpoint.smAndUp') {{ text }}
</template>

<script>
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
  }
}
</script>
