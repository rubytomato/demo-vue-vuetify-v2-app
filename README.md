# demo-vue-vuetify-v2-app

Vuetify.js Simple Application Demonstration.

**GitHub Pages**

Not yet.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Vuetify.js Setup

### Add Vuetify

```
$ vue add vuetify
```

### Install eslint-plugin-vuetify

```
$ npm install eslint-plugin-vuetify -D
```

```js
// .eslintrc.js
module.exports = {
  plugins: ["vuetify"],
  rules: {
    "vuetify/no-deprecated-classes": "error"
  }
};
```

### Install Material Design Icons

```
$ npm install @mdi/font -D
```

configuration

```js
// src/plugins/vuetify.js

import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi" // default - only for display purposes
  }
});
```

### Install preset basil

```
$ npm i vue-cli-plugin-vuetify-preset-basil -D
```

configuration

```js
// src/plugins/vuetify.js

// Preset
import { preset } from "vue-cli-plugin-vuetify-preset-basil/preset";

Vue.use(Vuetify);

export default new Vuetify({
  preset
});
```
