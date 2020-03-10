<template>
  <v-app :dark="theme.dark" :light="theme.light" v-scroll="onScroll">
    <v-navigation-drawer
      app
      v-model="drawer"
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
      :mobile-break-point="navDrawer.mobileBreakPoint"
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
      v-if="drawerOn"
    >
      <v-list-item>
        <v-list-item-title class="title">
          Drawer
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
          <v-btn block>append</v-btn>
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

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>
        <v-btn class="title" text to="/"> Title : {{ offsetTop }} </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon tile v-for="menu in menus" :key="menu.title" :to="menu.url">
        <v-icon>{{ menu.icon }}</v-icon>
      </v-btn>
      <v-btn icon tile @click.stop="drawerOn = !drawerOn">
        <v-icon>{{ drawerIcon }}</v-icon>
      </v-btn>
      <v-btn icon tile @click.stop="footerOn = !footerOn">
        <v-icon>{{ footerIcon }}</v-icon>
      </v-btn>
      <v-btn icon tile @click.stop="bottomNavOn = !bottomNavOn">
        <v-icon>{{ bottomNavIcon }}</v-icon>
      </v-btn>
      <v-btn icon tile>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

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
      :input-value="bottomNav.inputValue"
      :mandatory="bottomNav.mandatory"
      :scroll-threshold="bottomNav.scrollThreshold"
      :shift="bottomNav.shift"
      :width="bottomNav.width"
      v-if="bottomNavOn"
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
      v-if="footerOn"
    >
      <v-card :color="theme.color" tile width="100%" class="text-center">
        <v-card-text>
          <v-btn class="mx-4" icon>
            <v-icon>mdi-email</v-icon>
          </v-btn>
          <v-btn class="mx-4" icon>
            <v-icon>mdi-calendar</v-icon>
          </v-btn>
          <v-btn class="mx-4" icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-text>
        <v-divider />
        <v-card-text class="font-weight-medium">2020 — Footer</v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    drawerOn: true,
    footerOn: false,
    bottomNavOn: true,
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
    }),
    drawerIcon() {
      return this.drawerOn ? 'mdi-alpha-d-box' : 'mdi-alpha-d-box-outline'
    },
    footerIcon() {
      return this.footerOn ? 'mdi-alpha-f-box' : 'mdi-alpha-f-box-outline'
    },
    bottomNavIcon() {
      return this.bottomNavOn ? 'mdi-alpha-b-box' : 'mdi-alpha-b-box-outline'
    }
  },
  methods: {
    ...mapActions('navDrawer', ['toggleNavDrawer']),
    onScroll(e) {
      this.offsetTop = e.target.scrollingElement.scrollTop
    }
  }
}
</script>
