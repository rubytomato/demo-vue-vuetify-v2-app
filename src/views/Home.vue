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
          <v-subheader>Theme</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>dark = [{{ theme.dark }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="theme.dark" @click.stop="selectTheme(true, false)" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>light= [ {{ theme.light }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="theme.light" @click.stop="selectTheme(false, true)" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-select :items="colorList()" :value="theme.color" label="color" return-object @change="selectColor" />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list dense subheader class="text-left">
          <v-subheader>Application Bar</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>tile = [{{ appBar.tile }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.tile" @click.stop="toggleAppBar('tile')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>dense = [{{ appBar.dense }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.dense" @click.stop="toggleAppBar('dense')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>short = [{{ appBar.short }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.short" @click.stop="toggleAppBar('short')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>prominent = [{{ appBar.prominent }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.prominent" @click.stop="toggleAppBar('prominent')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>shrinkOnScroll = [{{ appBar.shrinkOnScroll }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.shrinkOnScroll" @click.stop="toggleAppBar('shrinkOnScroll')" />
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
              <v-list-item-title>extended = [{{ appBar.extended }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.extended" @click.stop="toggleAppBar('extended')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-select
                  :items="heightList()"
                  :value="appBar.extensionHeight"
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
              <v-list-item-title>flat = [{{ appBar.flat }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.flat" @click.stop="toggleAppBar('flat')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>elevateOnScroll = [{{ appBar.elevateOnScroll }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.elevateOnScroll" @click.stop="toggleAppBar('elevateOnScroll')" />
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
                  :value="appBar.elevation"
                  label="elevation"
                  @change="selectElevation($event, 'appBar')"
                />
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text>reset</v-list-item-action-text>
              <v-btn icon right @click.stop="resetAppBar('elevation')">
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>hideOnScroll = [{{ appBar.hideOnScroll }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.hideOnScroll" @click.stop="toggleAppBar('hideOnScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>invertedScroll = [{{ appBar.invertedScroll }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.invertedScroll" @click.stop="toggleAppBar('invertedScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>scrollOffScreen = [{{ appBar.scrollOffScreen }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.scrollOffScreen" @click.stop="toggleAppBar('scrollOffScreen')" />
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>collapse = [{{ appBar.collapse }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.collapse" @click.stop="toggleAppBar('collapse')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>collapseOnScroll = [{{ appBar.collapseOnScroll }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.collapseOnScroll" @click.stop="toggleAppBar('collapseOnScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-select :items="srcList()" :value="appBar.src" label="src" return-object @change="selectSrc" />
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>fadeImgOnScroll = [{{ appBar.fadeImgOnScroll }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.fadeImgOnScroll" @click.stop="toggleAppBar('fadeImgOnScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-select
                :items="thresholdList()"
                :value="appBar.scrollThreshold"
                label="scroll threshold"
                return-object
                @change="selectThreshold"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list dense subheader class="text-left">
          <v-subheader>Footer</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>padless = [{{ footer.padless }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="footer.padless" @click.stop="toggleFooter('padless')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>tile = [{{ footer.tile }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="footer.tile" @click.stop="toggleFooter('tile')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>inset = [{{ footer.inset }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="footer.inset" @click.stop="toggleFooter('inset')" />
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
                  :value="footer.elevation"
                  label="elevation"
                  @change="selectElevation($event, 'footer')"
                />
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text>reset</v-list-item-action-text>
              <v-btn icon right @click.stop="resetFooter('elevation')">
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>absolute = [{{ footer.absolute }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="footer.absolute" @click.stop="toggleFooter('absolute')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>fixed = [{{ footer.fixed }}]</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="footer.fixed" @click.stop="toggleFooter('fixed')" />
            </v-list-item-action>
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
      appBar: state => state.props,
      extentionSlot: state => state.extentionSlot
    }),
    ...mapState('footer', {
      footer: state => state.props
    }),
    ...mapState('theme', {
      theme: state => state.props
    })
  },
  methods: {
    selectColor(color) {
      this.changeColor(color)
    },
    selectTheme(dark, light) {
      this.changeTheme({ dark, light })
    },
    selectHeight(height) {
      this.changeAppBar({ prop: 'extensionHeight', value: height })
    },
    selectElevation(elevation, module) {
      if (module === 'appBar') {
        this.changeAppBar({ prop: 'elevation', value: elevation })
      } else if (module === 'footer') {
        this.changeFooter({ prop: 'elevation', value: elevation })
      }
    },
    selectThreshold(threshold) {
      this.changeAppBar({ prop: 'scrollThreshold', value: threshold })
    },
    selectSrc(src) {
      this.changeAppBar({ prop: 'src', value: src })
    },
    ...mapGetters('appBar', ['heightList', 'thresholdList', 'srcList']),
    ...mapGetters('theme', ['colorList']),
    ...mapActions('appBar', ['toggleAppBar', 'changeAppBar', 'resetAppBar', 'toggleExtentionSlot']),
    ...mapActions('footer', ['toggleFooter', 'changeFooter', 'resetFooter']),
    ...mapActions('theme', ['changeColor', 'changeTheme'])
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
