<template>
  <v-container id="scrolling-techniques">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('@/assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>
      <v-col class="mb-5" cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
        </p>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>
        <v-row justify="center">
          <a v-for="(next, i) in whatsNext" :key="i" :href="next.href" class="subheading mx-3" target="_blank">
            {{ next.text }}
          </a>
        </v-row>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>
        <v-row justify="center">
          <a v-for="(link, i) in importantLinks" :key="i" :href="link.href" class="subheading mx-3" target="_blank">
            {{ link.text }}
          </a>
        </v-row>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>
        <v-row justify="center">
          <a v-for="(eco, i) in ecosystem" :key="i" :href="eco.href" class="subheading mx-3" target="_blank">
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-list dense class="text-left">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>dark = [{{ theme.dark }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="theme.dark" @click.stop="toggleTheme('dark')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>light= [ {{ theme.light }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="theme.light" @click.stop="toggleTheme('light')" />
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>tile = [{{ props.tile }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="props.tile" @click.stop="toggle('tile')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-select :items="colorList()" :value="props.color" label="color" return-object @change="selectColor" />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>dense = [{{ props.dense }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="props.dense" @click.stop="toggle('dense')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>short = [{{ props.short }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="props.short" @click.stop="toggle('short')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>prominent = [{{ props.prominent }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="props.prominent" @click.stop="toggle('prominent')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>shrinkOnScroll = [{{ props.shrinkOnScroll }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="props.shrinkOnScroll" @click.stop="toggle('shrinkOnScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>extentionSlot = [{{ extentionSlot }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="extentionSlot" @click.stop="toggleExtentionSlot" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>extended = [{{ props.extended }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="props.extended" @click.stop="toggle('extended')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-select
                  :items="heightList()"
                  :value="props.extensionHeight"
                  label="extension height"
                  return-object
                  @change="selectHeight"
                />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>flat = [{{ props.flat }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="props.flat" @click.stop="toggle('flat')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>elevateOnScroll = [{{ props.elevateOnScroll }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="props.elevateOnScroll" @click.stop="toggle('elevateOnScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>
                <v-slider
                  dense
                  :thumb-size="20"
                  thumb-label="always"
                  height="72"
                  min="0"
                  max="24"
                  :value="props.elevation"
                  label="elevation"
                  @change="selectElevation"
                />
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text>reset</v-list-item-action-text>
              <v-btn icon right @click.stop="reset('elevation')">
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>hideOnScroll = [{{ props.hideOnScroll }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="props.hideOnScroll" @click.stop="toggle('hideOnScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>invertedScroll = [{{ props.invertedScroll }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="props.invertedScroll" @click.stop="toggle('invertedScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>scrollOffScreen = [{{ props.scrollOffScreen }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="props.scrollOffScreen" @click.stop="toggle('scrollOffScreen')" />
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>collapse = [{{ props.collapse }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="props.collapse" @click.stop="toggle('collapse')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>collapseOnScroll = [{{ props.collapseOnScroll }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="props.collapseOnScroll" @click.stop="toggle('collapseOnScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-select :items="srcList()" :value="props.src" label="src" return-object @change="selectSrc" />
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>fadeImgOnScroll = [{{ props.fadeImgOnScroll }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="props.fadeImgOnScroll" @click.stop="toggle('fadeImgOnScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-select
                :items="thresholdList()"
                :value="props.scrollThreshold"
                label="scroll threshold"
                return-object
                @change="selectThreshold"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col class="mb-10" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Dummy1
        </h2>

        <v-row justify="center">
          <a v-for="(eco, i) in ecosystem" :key="i" :href="eco.href" class="subheading mx-3" target="_blank">
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-10" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Dummy2
        </h2>

        <v-row justify="center">
          <a v-for="(eco, i) in ecosystem" :key="i" :href="eco.href" class="subheading mx-3" target="_blank">
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-10" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Dummy3
        </h2>

        <v-row justify="center">
          <a v-for="(eco, i) in ecosystem" :key="i" :href="eco.href" class="subheading mx-3" target="_blank">
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-10" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Dummy4
        </h2>

        <v-row justify="center">
          <a v-for="(eco, i) in ecosystem" :key="i" :href="eco.href" class="subheading mx-3" target="_blank">
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-10" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Dummy5
        </h2>

        <v-row justify="center">
          <a v-for="(eco, i) in ecosystem" :key="i" :href="eco.href" class="subheading mx-3" target="_blank">
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState('appBar', {
      props: state => state.props,
      extentionSlot: state => state.extentionSlot,
      theme: state => state.theme
    })
  },
  methods: {
    selectColor(color) {
      this.change({ prop: 'color', value: color })
    },
    selectHeight(height) {
      this.change({ prop: 'extensionHeight', value: height })
    },
    selectElevation(elevation) {
      this.change({ prop: 'elevation', value: elevation })
    },
    selectThreshold(threshold) {
      this.change({ prop: 'scrollThreshold', value: threshold })
    },
    selectSrc(src) {
      this.change({ prop: 'src', value: src })
    },
    ...mapGetters('appBar', ['colorList', 'heightList', 'thresholdList', 'srcList']),
    ...mapActions('appBar', ['toggle', 'change', 'reset', 'toggleExtentionSlot', 'toggleTheme'])
  },
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ]
  }),
  watch: {
    extentionSlot(val, old) {
      console.log('extentionSlot', val, old)
    }
  }
}
</script>
