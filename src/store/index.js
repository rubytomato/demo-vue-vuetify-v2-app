import Vue from 'vue'
import Vuex from 'vuex'
import theme from './theme'
import appBar from './appbar'
import footer from './footer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    theme,
    appBar,
    footer
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
