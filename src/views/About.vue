<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-subheader>$vuetify.breakpoint</v-subheader>
          <v-sheet elevation="2" color="green lighten-4" tile class="pa-2 ma-2" max-width="500">
            <p>Name: {{ $vuetify.breakpoint.name }}</p>
            <p>Height: {{ $vuetify.breakpoint.height }} / Width: {{ $vuetify.breakpoint.width }}</p>
            <v-divider />
            <ul>
              <li>XS : {{ $vuetify.breakpoint.xs }}</li>
              <li>SM : {{ $vuetify.breakpoint.sm }}</li>
              <li>MD : {{ $vuetify.breakpoint.md }}</li>
              <li>LG : {{ $vuetify.breakpoint.lg }}</li>
              <li>XL : {{ $vuetify.breakpoint.xl }}</li>
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
    //
  })
}
</script>
