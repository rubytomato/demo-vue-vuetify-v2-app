<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1 class="title">This is a favorites page</h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="red white--text" elevation="10" v-show="$vuetify.breakpoint.lgAndUp">
          <v-card-title color="white--text" class="headline">Show LG and Up</v-card-title>
          <v-card-subtitle>v-show</v-card-subtitle>
          <v-card-text>
            <div>card text</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="blue white--text" elevation="10" v-if="$vuetify.breakpoint.lgAndUp">
          <v-card-title color="white--text" class="headline">Show LG and Up</v-card-title>
          <v-card-subtitle>v-if</v-card-subtitle>
          <v-card-text>
            <div>card text</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="green white--text" class="d-none d-lg-block" elevation="10">
          <v-card-title color="white--text" class="headline">Hidden MD and Down</v-card-title>
          <v-card-subtitle>css hidden</v-card-subtitle>
          <v-card-text>
            <div>card text</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="yellow white--text" class="hidden-md-and-down" elevation="10">
          <v-card-title color="white--text" class="headline">Hidden MD and Down</v-card-title>
          <v-card-subtitle>css hidden</v-card-subtitle>
          <v-card-text>
            <div>card text</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <div class="pa-4 d-none elevation-15">none text</div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="pa-4 d-block elevation-15">block text</div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="pa-4 d-inline elevation-15">inline text</div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="pa-4 d-inline-block elevation-15">inline-block text</div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="pa-4 d-flex elevation-15">flex text</div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="pa-4 d-inline-flex elevation-15">inline-flex text</div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="pa-4 d-table elevation-15">table text</div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="pa-4 d-table-cell elevation-15">table-cell text</div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="pa-4 d-table-row elevation-15">table-row text</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Favorites',
  data: () => ({
    //
  })
}
</script>
