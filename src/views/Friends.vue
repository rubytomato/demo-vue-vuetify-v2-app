<template>
  <v-container fluid>
    <v-row justify="center" dense>
      <v-col cols="12">
        <div class="headline">ロボダッチ 4点コレクション</div>
      </v-col>
    </v-row>
    <v-row justify="start" dense>
      <v-col cols="12" md="6" lg="4" v-for="member in members" :key="member.id" class="d-flex flex-column">
        <v-card :color="member.color" class="flex d-flex flex-column">
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-card-text class="pa-0">
              <v-card-title class="headline mb-1">{{ member.id }}) {{ member.name }}</v-card-title>
              <v-card-subtitle>{{ member.description }}</v-card-subtitle>
              <v-divider />
              <template v-for="friend in member.friends">
                <v-chip class="ma-2" small label :color="friend.color" :key="friend.name">{{ friend.name }}</v-chip>
              </template>
            </v-card-text>
            <v-avatar class="ma-2" size="120" tile color="grey">
              <v-img :src="member.imageSrc" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)" />
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Friends',
  data: () => ({
    //
  }),
  computed: {
    ...mapState('friends', {
      members: state => state.members
    })
  }
}
</script>
