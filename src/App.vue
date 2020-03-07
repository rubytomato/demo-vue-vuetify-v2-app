<template>
  <v-app :dark="theme.dark" :light="theme.light">
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

      <v-app-bar-nav-icon />

      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer />
      <v-btn icon tile to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon tile to="/favorites">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon tile to="/about">
        <v-icon>mdi-information-variant</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

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
import { mapState } from 'vuex'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed: {
    ...mapState('appBar', {
      appBar: state => state.props,
      extentionSlot: state => state.extentionSlot
    }),
    ...mapState('footer', {
      footer: state => state.props
    }),
    ...mapState('theme', {
      theme: state => state.props
    })
  }
}
</script>
