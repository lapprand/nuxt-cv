import { getField, updateField } from "vuex-map-fields"

export const strict = false

export const state = () => ({})

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
