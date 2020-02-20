<template lang="pug">
  v-row.hidden-print-only(justify='center')
    v-col(cols='auto')
      v-btn.mx-1(v-for='locale in $i18n.locales' :key="locale.code" :to='switchLocalePath(locale.code)' icon large outlined color='white')
        client-only
          v-icon(v-if="locale.code === 'pt'") $vuetify.icons.brFlag
          v-icon(v-if="locale.code === 'en'") $vuetify.icons.usFlag
      v-btn.mx-1(@click.stop='$vuetify.theme.dark = !$vuetify.theme.dark' icon large outlined color='white')
        v-icon mdi-invert-colors
</template>
