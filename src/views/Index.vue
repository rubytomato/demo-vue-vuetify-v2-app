<template>
  <div class="index">
    <h1>This is an index page</h1>
    <v-container>
      <v-row>
        <v-col cols="12">
          <template v-for="menu in menus">
            <v-btn text tile :key="menu.title" :to="menu.url">
              {{ menu.title }}
            </v-btn>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['menus'])
  }
}
</script>
