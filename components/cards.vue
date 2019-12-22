<template lang="pug">
  section
    v-row
      v-col
        v-card.transparent(flat)
          v-card-title
            v-icon(left) mdi-briefcase
            span {{ $t('work.title') }}
          v-container
            template(v-for="work in $t('work.projects')")
              v-row(dense)
                v-col
                  span.subtitle-1.font-weight-medium.pr-3
                    a(:href="work.url") {{ work.title }}
                  v-chip(x-small) {{ work.type }}
              v-row(dense)
                v-col
                  p.body-2(v-html='work.desc')
    v-divider
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
    v-divider
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
