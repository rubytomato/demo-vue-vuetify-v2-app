const COLORS = ['undefined', 'primary', 'secondary', 'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue']
const HEIGHTS = [40, 48, 56, 64, 72, 80]
const THRESHOLD = ['undefined', 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
const SRC = ['undefined', 'https://picsum.photos/1920/1080?random']

const appBar = {
  namespaced: true,
  state: {
    props: {
      color: 'primary',
      dense: false,
      short: true,
      prominent: false,
      shrinkOnScroll: false,
      flat: false,
      extended: false,
      extensionHeight: 48,
      elevation: undefined,
      elevateOnScroll: false,
      collapse: false,
      collapseOnScroll: false,
      hideOnScroll: false,
      invertedScroll: false,
      scrollOffScreen: false,
      tile: true,
      src: undefined,
      fadeImgOnScroll: false,
      scrollThreshold: undefined
    },
    extentionSlot: false,
    theme: {
      dark: true,
      light: false
    }
  },
  getters: {
    colorList() {
      return COLORS
    },
    heightList() {
      return HEIGHTS
    },
    thresholdList() {
      return THRESHOLD
    },
    srcList() {
      return SRC
    }
  },
  mutations: {
    toggle(state, prop) {
      state.props[prop] = !state.props[prop]
    },
    change(state, payload) {
      if (payload.value === 'undefined') {
        state.props[payload.prop] = undefined
      } else {
        state.props[payload.prop] = payload.value
      }
    },
    reset(state, prop) {
      state.props[prop] = undefined
    },
    toggleExtentionSlot(state) {
      state.extentionSlot = !state.extentionSlot
    },
    toggleTheme(state, prop) {
      state.theme[prop] = !state.theme[prop]
    }
  },
  actions: {
    toggle({ commit }, prop) {
      commit('toggle', prop)
    },
    change({ commit }, payload) {
      commit('change', payload)
    },
    reset({ commit }, prop) {
      commit('reset', prop)
    },
    toggleExtentionSlot({ commit }) {
      commit('toggleExtentionSlot')
    },
    toggleTheme({ commit }, prop) {
      commit('toggleTheme', prop)
    }
  }
}

export default appBar
