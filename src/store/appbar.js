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
    extentionSlot: false
  },
  getters: {
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
    }
  },
  actions: {
    toggleAppBar({ commit }, prop) {
      commit('toggle', prop)
    },
    changeAppBar({ commit }, payload) {
      commit('change', payload)
    },
    resetAppBar({ commit }, prop) {
      commit('reset', prop)
    },
    toggleExtentionSlot({ commit }) {
      commit('toggleExtentionSlot')
    }
  }
}

export default appBar
