<template>
  <v-app :dark="theme.dark" :light="theme.light" v-scroll="onScroll">
    <v-navigation-drawer
      app
      v-model="rightDrawer"
      :dark="theme.dark"
      :light="theme.light"
      color="white"
      right
      temporary
    >
      <v-list-item color="white accent-3">
        <v-list-item-title class="title grey--text">
          Right Drawer
        </v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>

    <v-navigation-drawer
      app
      v-model="leftDrawer"
      :dark="theme.dark"
      :light="theme.light"
      :color="theme.color"
      :bottom="navDrawer.bottom"
      :clipped="navDrawer.clipped"
      :disable-resize-watcher="navDrawer.disableResizeWatcher"
      :disable-route-watcher="navDrawer.disableRouteWatcher"
      :expand-on-hover="navDrawer.expandOnHover"
      :floating="navDrawer.floating"
      :hide-overlay="navDrawer.hideOverlay"
      :mini-variant.sync="navDrawer.miniVariant"
      :mini-variant-width="navDrawer.miniVariantWidth"
      :mobile-breakpoint="navDrawer.mobileBreakPoint"
      :overlay-color="navDrawer.overlayColor"
      :overlay-opacity="navDrawer.overlayOpacity"
      :permanent="navDrawer.permanent"
      :right="navDrawer.right"
      :src="navDrawer.src"
      :stateless="navDrawer.stateless"
      :temporary="navDrawer.temporary"
      :touchless="navDrawer.touchless"
      :width="navDrawer.width"
      :height="navDrawer.height"
    >
      <v-list-item>
        <v-list-item-title class="title">
          Left Drawer
        </v-list-item-title>
        <v-btn icon @click.stop="toggleNavDrawer('miniVariant')">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider />
      <v-list nav>
        <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.url">
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:img="{ height, src }" v-if="navDrawer.src">
        <v-img :height="height" :src="src" gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"></v-img>
      </template>

      <template v-slot:prepend v-if="navDrawer.prependSlot">
        <div class="pa-2">
          <v-btn block>prepend</v-btn>
        </div>
      </template>
      <template v-slot:append v-if="navDrawer.appendSlot">
        <div class="pa-2">
          <v-btn block @click.stop="leftDrawer = !leftDrawer">close</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      app
      :dark="theme.dark"
      :light="theme.light"
      :color="theme.color"
      :dense="appBar.dense"
      :short="appBar.short"
      :prominent="appBar.prominent"
      :shrink-on-scroll="appBar.shrinkOnScroll"
      :extension-height="appBar.extensionHeight"
      :extended="appBar.extended"
      :elevation="appBar.elevation"
      :elevate-on-scroll="appBar.elevateOnScroll"
      :flat="appBar.flat"
      :collapse="appBar.collapse"
      :collapse-on-scroll="appBar.collapseOnScroll"
      :hide-on-scroll="appBar.hideOnScroll"
      :inverted-scroll="appBar.invertedScroll"
      :scroll-off-screen="appBar.scrollOffScreen"
      :tile="appBar.tile"
      :src="appBar.src"
      :fade-img-on-scroll="appBar.fadeImgOnScroll"
      :scroll-threshold="appBar.scrollThreshold"
      :clipped-left="appBar.clippedLeft"
      :clipped-right="appBar.clippedRight"
    >
      <template v-slot:extension v-if="extentionSlot">
        <v-tabs align-with-title fixed-tabs color="white">
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab><v-icon>mdi-home</v-icon></v-tab>
          <v-tab><v-icon>mdi-magnify</v-icon></v-tab>
          <v-tab><v-icon>mdi-account</v-icon></v-tab>
        </v-tabs>
      </template>

      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"></v-img>
      </template>

      <v-app-bar-nav-icon @click.stop="leftDrawer = !leftDrawer" v-if="$vuetify.breakpoint.mdAndUp" />

      <v-toolbar-title>
        <!-- <div class="title white--text">Demo Application : {{ offsetTop }}</div> -->
        <router-link class="title white--text logo" to="/">Demo Application</router-link> : {{ offsetTop }}
      </v-toolbar-title>

      <v-spacer />

      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn icon tile v-for="menu in menus" :key="menu.title" :to="menu.url">
          <v-icon>{{ menu.icon }}</v-icon>
        </v-btn>
      </template>
      <v-btn icon tile v-if="$vuetify.breakpoint.smAndDown" @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-bottom-navigation
      app
      :dark="theme.dark"
      :light="theme.light"
      :background-color="theme.color"
      :active-class="bottomNav.activeClass"
      :grow="bottomNav.grow"
      :height="bottomNav.height"
      :hide-on-scroll="bottomNav.hideOnScroll"
      :horizontal="bottomNav.horizontal"
      :mandatory="bottomNav.mandatory"
      :scroll-threshold="bottomNav.scrollThreshold"
      :shift="bottomNav.shift"
      :width="bottomNav.width"
      :input-value="$vuetify.breakpoint.smAndDown"
      v-if="$vuetify.breakpoint.smAndDown"
    >
      <v-btn v-for="menu in menus" :key="menu.title" :to="menu.url">
        <span>{{ menu.title }}</span>
        <v-icon>{{ menu.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-footer
      app
      :dark="theme.dark"
      :light="theme.light"
      :color="theme.color"
      :padless="footer.padless"
      :tile="footer.tile"
      :inset="footer.inset"
      :elevation="footer.elevation"
      :absolute="footer.absolute"
      :fixed="footer.fixed"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <v-card :color="theme.color" tile width="100%" class="text-center">
        <v-card-text class="font-weight-medium">2020 — Footer</v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<style scoped>
.logo {
  text-decoration: none;
}
</style>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  data: () => ({
    leftDrawer: false,
    rightDrawer: false,
    offsetTop: 0
  }),
  computed: {
    ...mapState(['menus']),
    ...mapState('navDrawer', {
      navDrawer: state => state.props
    }),
    ...mapState('appBar', {
      appBar: state => state.props,
      extentionSlot: state => state.extentionSlot
    }),
    ...mapState('footer', {
      footer: state => state.props
    }),
    ...mapState('bottomNav', {
      bottomNav: state => state.props
    }),
    ...mapState('theme', {
      theme: state => state.props
    })
  },
  methods: {
    ...mapActions('navDrawer', ['toggleNavDrawer']),
    onScroll(e) {
      this.offsetTop = e.target.scrollingElement.scrollTop
    }
  }
}
</script>
