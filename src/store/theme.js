const COLORS = ['undefined', 'primary', 'secondary', 'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue']

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
    changeColor({ commit }, color) {
      commit('change', { prop: 'color', value: color })
    },
    changeTheme({ commit }, payload) {
      commit('change', { prop: 'dark', value: payload.dark })
      commit('change', { prop: 'light', value: payload.light })
    }
  }
}

export default theme
