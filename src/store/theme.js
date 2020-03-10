const COLORS = [
  'undefined',
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
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'blue-grey',
  'grey',
  'black',
  'white',
  'transparent'
]

const theme = {
  namespaced: true,
  state: {
    props: {
      color: 'primary',
      dark: true,
      light: false
    }
  },
  getters: {
    colorList() {
      return COLORS
    }
  },
  mutations: {
    change(state, payload) {
      if (payload.value === 'undefined') {
        state.props[payload.prop] = undefined
      } else {
        state.props[payload.prop] = payload.value
      }
    }
  },
  actions: {
    change({ commit }, payload) {
      commit('change', payload)
    },
    changeTheme({ commit }, payload) {
      commit('change', { prop: 'dark', value: payload.dark })
      commit('change', { prop: 'light', value: payload.light })
    }
  }
}

export default theme
