const footer = {
  namespaced: true,
  state: {
    props: {
      padless: true,
      inset: true,
      tile: true,
      elevation: undefined,
      absolute: false,
      fixed: false
    }
  },
  getters: {},
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
    }
  },
  actions: {
    toggleFooter({ commit }, prop) {
      commit('toggle', prop)
    },
    changeFooter({ commit }, payload) {
      commit('change', payload)
    },
    resetFooter({ commit }, prop) {
      commit('reset', prop)
    }
  }
}

export default footer
