<template>
  <v-app :dark="theme.dark" :light="theme.light">
    <v-app-bar
      app
      :dark="theme.dark"
      :light="theme.light"
      :color="props.color"
      :dense="props.dense"
      :short="props.short"
      :prominent="props.prominent"
      :shrink-on-scroll="props.shrinkOnScroll"
      :extension-height="props.extensionHeight"
      :extended="props.extended"
      :elevation="props.elevation"
      :elevate-on-scroll="props.elevateOnScroll"
      :flat="props.flat"
      :collapse="props.collapse"
      :collapse-on-scroll="props.collapseOnScroll"
      :hide-on-scroll="props.hideOnScroll"
      :inverted-scroll="props.invertedScroll"
      :scroll-off-screen="props.scrollOffScreen"
      :tile="props.tile"
      :src="props.src"
      :fade-img-on-scroll="props.fadeImgOnScroll"
      :scroll-threshold="props.scrollThreshold"
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
      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
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
      props: state => state.props,
      extentionSlot: state => state.extentionSlot,
      theme: state => state.theme
    })
  }
}
</script>
