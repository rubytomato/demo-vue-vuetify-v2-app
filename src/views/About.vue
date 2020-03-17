<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-container>
      <v-row v-resize="onResize" align="center" justify="center">
        <v-subheader>Window Size</v-subheader>
        {{ windowSize }}
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-subheader>$vuetify.breakpoint</v-subheader>
          <v-sheet elevation="2" color="green lighten-4" tile class="pa-2 ma-2" max-width="500">
            <p>Name: {{ $vuetify.breakpoint.name }}</p>
            <p>Height: {{ $vuetify.breakpoint.height }} / Width: {{ $vuetify.breakpoint.width }}</p>
            <v-divider />
            <ul>
              <li>XS : {{ $vuetify.breakpoint.xs }} / {{ $vuetify.breakpoint.thresholds.xs }}</li>
              <li>SM : {{ $vuetify.breakpoint.sm }} / {{ $vuetify.breakpoint.thresholds.sm }}</li>
              <li>MD : {{ $vuetify.breakpoint.md }} / {{ $vuetify.breakpoint.thresholds.md }}</li>
              <li>LG : {{ $vuetify.breakpoint.lg }} / {{ $vuetify.breakpoint.thresholds.lg }}</li>
              <li>XL : {{ $vuetify.breakpoint.xl }}</li>
            </ul>
            <v-divider />
            <ul>
              <li>XS Only : {{ $vuetify.breakpoint.xsOnly }}</li>
              <li>SM Only : {{ $vuetify.breakpoint.smOnly }}</li>
              <li>MD Only : {{ $vuetify.breakpoint.mdOnly }}</li>
              <li>LG Only : {{ $vuetify.breakpoint.lgOnly }}</li>
              <li>XL Only : {{ $vuetify.breakpoint.xlOnly }}</li>
            </ul>
            <v-divider />
            <ul>
              <li>SM and Down : {{ $vuetify.breakpoint.smAndDown }}</li>
              <li>SM and Up : {{ $vuetify.breakpoint.smAndUp }}</li>
              <li>MD and Down : {{ $vuetify.breakpoint.mdAndDown }}</li>
              <li>MD and Up : {{ $vuetify.breakpoint.mdAndUp }}</li>
              <li>LG and Down : {{ $vuetify.breakpoint.lgAndDown }}</li>
              <li>LG and Up : {{ $vuetify.breakpoint.lgAndUp }}</li>
            </ul>
          </v-sheet>
        </v-col>
        <v-col cols="12">
          <v-subheader>$vuetify.application</v-subheader>
          <v-sheet elevation="2" color="green lighten-4" tile class="pa-2 ma-2" max-width="500">
            <ul>
              <li>bar : {{ $vuetify.application.bar }}</li>
              <li>top : {{ $vuetify.application.top }}</li>
              <li>left : {{ $vuetify.application.left }}</li>
              <li>bottom : {{ $vuetify.application.bottom }}</li>
              <li>right : {{ $vuetify.application.right }}</li>
              <li>insetFooter : {{ $vuetify.application.insetFooter }}</li>
              <li>footer : {{ $vuetify.application.footer }}</li>
            </ul>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    windowSize: {
      x: 0,
      y: 0
    }
  }),
  mounted() {
    this.onResize()
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    }
  }
}
</script>
