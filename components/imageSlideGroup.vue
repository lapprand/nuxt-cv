<template lang="pug">
  div
    v-slide-group(v-model='slideGroup' show-arrows center-active)
      v-slide-item(v-for='(image, index) in images' :key="image" v-slot:default="{ active, toggle }")
        v-card.ma-2(@click="onItemClick(index)")
          v-img(:src='image' :width='imageItemWidth' contain)
            template(v-slot:placeholder)
              ImagePlaceholder
    v-dialog(v-model='isImageDialogOpened' max-width="600" :fullscreen='isMobile')
      v-card
        v-container
          v-row(justify='center' v-touch="{ left: () => nextImage(), right: () => prevImage() }")
            v-col(cols='auto')
              v-btn(v-show="selectedImgIndex > 0" @click="prevImage" fab absolute left small color="primary" style="top: 45%;")
                v-icon mdi-chevron-left
              v-btn(v-show="selectedImgIndex < images.length - 1" @click="nextImage" fab absolute right small color="primary" style="top: 45%;")
                v-icon mdi-chevron-right
              perfect-scrollbar.scroll-area
                v-img(:src='images[selectedImgIndex]' :max-height="isMobile ? 'calc(100vh - 160px)' : '75vh'" contain)
                  template(v-slot:placeholder)
                    ImagePlaceholder
          v-row(justify='end')
            v-col(cols='auto')
              v-btn(@click="isImageDialogOpened = false" color='primary') {{ $t('defaults.close') }}
</template>

<script>
import ImagePlaceholder from "./imagePlaceholder"
import { Touch } from "vuetify/lib/directives"

export default {
  directives: {
    Touch
  },
  components: {
    ImagePlaceholder
  },
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
    }
  },
  data() {
    return {
      isImageDialogOpened: false,
      slideGroup: null,
      selectedImgIndex: 0
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly
    }
  },
  methods: {
    onItemClick(imageIndex) {
      this.selectedImgIndex = imageIndex
      this.isImageDialogOpened = true
    },
    nextImage() {
      if (this.selectedImgIndex < this.images.length - 1) {
        this.selectedImgIndex++
      }
    },
    prevImage() {
      if (this.selectedImgIndex > 0) {
        this.selectedImgIndex--
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-area {
  height: 100%;
}
</style>
