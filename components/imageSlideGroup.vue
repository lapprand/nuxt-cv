<template lang="pug">
  v-slide-group(v-model='slideGroup' show-arrows center-active)
    v-slide-item(v-for='image in images' :key="image" v-slot:default="{ active, toggle }")
      v-card.ma-2(@click="onItemClick(image)")
        v-img(:src='image' :width='imageItemWidth' contain)
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    imageItemWidth: {
      type: Number,
      required: true
    },
    disableItemClick: {
      type: Boolean,
      default: false,
      required: false
    },
    onItemClick: {
      type: Function,
      default: () => {},
      required: false
    }
  },
  data() {
    return {
      slideGroup: null
    }
  },
  methods: {}
}
</script>
