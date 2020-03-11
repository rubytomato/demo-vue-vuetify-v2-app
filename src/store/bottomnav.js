const ACTIVE_CLASS = [
  'v-btn--active',
  'primary',
  'secondary',
  'accent',
  'success',
  'info',
  'warning',
  'error',
  'red',
  'pink',
  'purple',
  'black',
  'white',
  'transparent'
]

const bottomNav = {
  namespaced: true,
  state: {
    props: {
      absolute: false,
      activeClass: 'v-btn--active',
      backgroundColor: undefined,
      color: undefined,
      fixed: false,
      grow: false,
      height: 56,
      hideOnScroll: false,
      horizontal: false,
      inputValue: false,
      mandatory: false,
      scrollTarget: undefined,
      scrollThreshold: undefined,
      shift: false,
      value: undefined,
      width: undefined
    }
  },
  getters: {
    activeClassList() {
      return ACTIVE_CLASS
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
    }
  },
  actions: {
    toggleBottomNav({ commit }, prop) {
      commit('toggle', prop)
    },
    changeBottomNav({ commit }, payload) {
      commit('change', payload)
    },
    resetBottomNav({ commit }, prop) {
      commit('reset', prop)
    }
  }
}

export default bottomNav
