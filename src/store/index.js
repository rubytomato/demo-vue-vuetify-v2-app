import Vue from 'vue'
import Vuex from 'vuex'
import theme from './theme'
import navDrawer from './navdrawer'
import appBar from './appbar'
import footer from './footer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    theme,
    navDrawer,
    appBar,
    footer
  },
  state: {
    menus: [
      { title: 'Index', icon: 'mdi-web', url: '/' },
      { title: 'Home', icon: 'mdi-home', url: '/home' },
      { title: 'Favorites', icon: 'mdi-heart', url: '/favorites' },
      { title: 'About', icon: 'mdi-information-variant', url: '/about' }
    ]
  },
  getters: {},
  mutations: {},
  actions: {}
})
