<template lang="pug">
  section
    v-row(no-gutters)
      v-col
        v-card.mb-4(outlined)
          v-card-title
            v-icon(left) mdi-briefcase
            span {{ $t('work.title') }}
          v-container
            template(v-for="work in $t('work.projects')")
              v-row(dense)
                v-col
                  span.subtitle-1.font-weight-medium.pr-3(v-html='work.title')
                  v-chip(x-small) {{ work.type }}
              v-row(dense)
                v-col
                  p.body-2(v-html='work.desc')
              v-row.pb-4(v-if='work.images' dense justify='center')
                v-col(cols="auto")
                  ImageSlideGroup(:images='work.images' :imageItemWidth='60' :onItemClick='openImageDialog')
    v-row(no-gutters)
      v-col
        v-card.mb-4(outlined)
          v-card-title
            v-icon(left) mdi-school
            span {{ $t('education.title') }}
          v-container
            span.subtitle-1.font-weight-medium {{ $t('education.degree') }}
            p.body-2 {{ $t('education.degreeDesc') }}
            p.body-2 {{ $t('education.internship') }}
    v-row(no-gutters)
      v-col
        v-card.mb-4(outlined)
          v-card-title
            v-icon(left) mdi-account
            span {{ $t('interests.title') }}
          v-container
            p.body-2 {{ $t('interests.p1') }}
            p.body-2 {{ $t('interests.p2') }}
    v-dialog(v-model='isImageDialogOpened' max-width="600")
      v-card()
        v-container
          v-row(justify='center')
            v-col(cols='auto')
              v-img(:src='selectedImg')
          v-row()
            v-col.d-flex.justify-end
              v-btn(@click="isImageDialogOpened = false" outlined color='primary') {{ $t('defaults.close') }}
</template>

<script>
import ImageSlideGroup from "./imageSlideGroup"

export default {
  components: {
    ImageSlideGroup
  },
  data() {
    return {
      isImageDialogOpened: false,
      slideGroup: null,
      selectedImg: ""
    }
  },
  methods: {
    openImageDialog(imageUrl) {
      this.selectedImg = imageUrl
      this.isImageDialogOpened = true
    }
  }
}
</script>
