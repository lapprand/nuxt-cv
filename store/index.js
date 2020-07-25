import { getField, updateField } from "vuex-map-fields"

export const strict = false

export const state = () => ({
  windowSize: {
    x: 0,
    y: 0
  }
})

export const getters = {
  getField
}

export const actions = {
  goTo(context, url) {
    window.location = url
  }
}

export const mutations = {
  updateField
}
