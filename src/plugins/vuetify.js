import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

// Locale
import { ja } from 'vuetify/lib/locale'

// Preset
import { preset } from 'vue-cli-plugin-vuetify-preset-basil/preset'

Vue.use(Vuetify)

export default new Vuetify({
  preset,
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  },
  lang: {
    current: 'ja',
    locales: { ja }
  },
  theme: {
    dark: false,
    disable: false,
    default: 'light'
  }
})
