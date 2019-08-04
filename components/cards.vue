<template lang="pug">
  section
    v-row
      v-col
        v-card.transparent(flat)
          v-card-title
            v-icon(left) mdi-briefcase
            span {{ $t('work.title') }}
          v-container
            span.subtitle-1.font-weight-medium
              a(:href="$t('work.p1.url')") {{ $t('work.p1.title') }}
            p.body-2 {{ $t('work.p1.desc') }}
            span.subtitle-1.font-weight-medium
              a(:href="$t('work.p2.url')") {{ $t('work.p2.title') }}
            p.body-2 {{ $t('work.p2.desc') }}
    v-row
      v-col
        v-card.transparent(flat)
          v-card-title
            v-icon(left) mdi-school
            span {{ $t('education.title') }}
          v-container
            span.subtitle-1.font-weight-medium {{ $t('education.degree') }}
            p.body-2 {{ $t('education.degreeDesc') }}
            p.body-2 {{ $t('education.internship') }}
    v-row
      v-col
        v-card.transparent(flat)
          v-card-title
            v-icon(left) mdi-account
            span {{ $t('interests.title') }}
          v-container
            p.body-2 {{ $t('interests.p1') }}
            p.body-2 {{ $t('interests.p2') }}
</template>
