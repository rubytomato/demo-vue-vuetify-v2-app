const SRC = ['undefined', 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg']

const navdrawer = {
  namespaced: true,
  state: {
    props: {
      bottom: false,
      clipped: false,
      disableResizeWatcher: false,
      disableRouteWatcher: false,
      expandOnHover: false,
      floating: false,
      miniVariant: false,
      miniVariantWidth: 56,
      mobileBreakPoint: 1264,
      permanent: false,
      right: false,
      src: undefined,
      stateless: false,
      temporary: false,
      touchless: false,
      hideOverlay: false,
      overlayColor: undefined,
      overlayOpacity: undefined,
      value: false,
      width: 256,
      height: '100%',
      prependSlot: false,
      appendSlot: false
    }
  },
  getters: {
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
    }
  },
  actions: {
    toggleNavDrawer({ commit }, prop) {
      commit('toggle', prop)
    },
    changeNavDrawer({ commit }, payload) {
      commit('change', payload)
    },
    resetNavDrawer({ commit }, prop) {
      commit('reset', prop)
    }
  }
}

export default navdrawer
