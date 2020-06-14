<template lang="pug">
  section
    v-row(no-gutters)
      v-col
        v-card.mb-4(outlined)
          v-card-title
            v-icon(left) mdi-folder
            span {{ $t('work.title') }}
          v-card-text
            template(v-for="work in $t('work.projects')")
              v-row(dense)
                v-col
                  span.subtitle-1.font-weight-medium.pr-3(v-html='work.title')
                  v-chip(small outlined) {{ work.type }}
              v-row(dense)
                v-col
                  p.body-1(v-html='work.desc')
              v-row.pb-4(v-if='work.images' dense justify='center')
                v-col(cols="auto")
                  ImageSlideGroup(:images='work.images' :imageItemWidth='60' @onItemClick='openImageDialog')
    v-row(no-gutters)
      v-col
        v-card.mb-4(outlined)
          v-card-title
            v-icon(left) mdi-briefcase
            span {{ $t('experience.title') }}
          v-card-text(v-for="(exp, index) of $t('experience.jobs')" :key="index")
            v-row.mb-2(no-gutters align="center")
              v-col(cols="auto")
                span.subtitle-1.font-weight-medium {{ exp.title }}
              v-col(cols="auto")
                span.subtitle-1.ml-1(v-if="exp.company" v-html="`- ${exp.company}`")
            ul
              li.body-1(v-for="desc of exp.descriptions") {{ desc }}
    v-row(no-gutters)
      v-col
        v-card.mb-4(outlined)
          v-card-title
            v-icon(left) mdi-school
            span {{ $t('education.title') }}
          v-card-text
            div.subtitle-1.font-weight-medium.mb-2 {{ $t('education.degree') }}
            p.body-1 {{ $t('education.degreeDesc') }}
            p.body-1 {{ $t('education.internship') }}
    v-dialog(v-model='isImageDialogOpened' max-width="600" :fullscreen='isMobile')
      v-card()
        v-container
          v-row(justify='center')
            v-col(cols='auto')
              v-img(:src='selectedImg' max-height='83vh' contain)
          v-row(justify='end')
            v-col(cols='auto')
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
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly
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
