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
              <v-list-item-title>dark: {{ theme.dark }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="theme.dark" @click.stop="selectTheme(true, false)" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>light: {{ theme.light }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="theme.light" @click.stop="selectTheme(false, true)" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-select
                  :items="colorList()"
                  :value="theme.color"
                  label="color"
                  return-object
                  @change="selectValue($event, 'theme', 'color')"
                />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-list dense class="text-left">
          <v-subheader>Application Bar</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>tile: {{ appBar.tile }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.tile" @click.stop="toggleAppBar('tile')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>dense: {{ appBar.dense }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.dense" @click.stop="toggleAppBar('dense')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>short: {{ appBar.short }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.short" @click.stop="toggleAppBar('short')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>prominent: {{ appBar.prominent }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.prominent" @click.stop="toggleAppBar('prominent')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>shrinkOnScroll: {{ appBar.shrinkOnScroll }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.shrinkOnScroll" @click.stop="toggleAppBar('shrinkOnScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>extentionSlot: {{ extentionSlot }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="extentionSlot" @click.stop="toggleExtentionSlot" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>extended: {{ appBar.extended }}</v-list-item-title>
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
                  @change="selectValue($event, 'appBar', 'extensionHeight')"
                />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>flat: {{ appBar.flat }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.flat" @click.stop="toggleAppBar('flat')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>elevateOnScroll: {{ appBar.elevateOnScroll }}</v-list-item-title>
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
                  @change="selectValue($event, 'appBar', 'elevation')"
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
              <v-list-item-title>hideOnScroll: {{ appBar.hideOnScroll }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.hideOnScroll" @click.stop="toggleAppBar('hideOnScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>invertedScroll: {{ appBar.invertedScroll }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.invertedScroll" @click.stop="toggleAppBar('invertedScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>scrollOffScreen: {{ appBar.scrollOffScreen }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.scrollOffScreen" @click.stop="toggleAppBar('scrollOffScreen')" />
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>collapse: {{ appBar.collapse }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.collapse" @click.stop="toggleAppBar('collapse')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>collapseOnScroll: {{ appBar.collapseOnScroll }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.collapseOnScroll" @click.stop="toggleAppBar('collapseOnScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-select
                :items="srcList()"
                :value="appBar.src"
                label="src"
                return-object
                @change="selectValue($event, 'appBar', 'src')"
              />
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>fadeImgOnScroll: {{ appBar.fadeImgOnScroll }}</v-list-item-title>
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
                @change="selectValue($event, 'appBar', 'scrollThreshold')"
              />
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>clippedLeft: {{ appBar.clippedLeft }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.clippedLeft" @click.stop="toggleAppBar('clippedLeft')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>clippedRight: {{ appBar.clippedRight }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.clippedRight" @click.stop="toggleAppBar('clippedRight')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>absolute: {{ appBar.absolute }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.absolute" @click.stop="toggleAppBar('absolute')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>fixed: {{ appBar.fixed }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="appBar.fixed" @click.stop="toggleAppBar('fixed')" />
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-list dense class="text-left">
          <v-subheader>Footer</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>padless: {{ footer.padless }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="footer.padless" @click.stop="toggleFooter('padless')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>tile: {{ footer.tile }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="footer.tile" @click.stop="toggleFooter('tile')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>inset: {{ footer.inset }}</v-list-item-title>
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
                  @change="selectValue($event, 'footer', 'elevation')"
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
              <v-list-item-title>absolute: {{ footer.absolute }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="footer.absolute" @click.stop="toggleFooter('absolute')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>fixed: {{ footer.fixed }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="footer.fixed" @click.stop="toggleFooter('fixed')" />
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-list dense class="text-left">
          <v-subheader>Navigation Drawer</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>bottom: {{ navDrawer.bottom }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="navDrawer.bottom" @click.stop="toggleNavDrawer('bottom')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>clipped: {{ navDrawer.clipped }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="navDrawer.clipped" @click.stop="toggleNavDrawer('clipped')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>floating: {{ navDrawer.floating }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="navDrawer.floating" @click.stop="toggleNavDrawer('floating')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>hideOverlay: {{ navDrawer.hideOverlay }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="navDrawer.hideOverlay" @click.stop="toggleNavDrawer('hideOverlay')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>permanent: {{ navDrawer.permanent }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="navDrawer.permanent" @click.stop="toggleNavDrawer('permanent')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>right: {{ navDrawer.right }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="navDrawer.right" @click.stop="toggleNavDrawer('right')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>temporary: {{ navDrawer.temporary }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="navDrawer.temporary" @click.stop="toggleNavDrawer('temporary')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>miniVariant: {{ navDrawer.miniVariant }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="navDrawer.miniVariant" @click.stop="toggleNavDrawer('miniVariant')" />
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
                  min="40"
                  max="80"
                  :value="navDrawer.miniVariantWidth"
                  label="miniVariantWidth"
                  @change="selectValue($event, 'navDrawer', 'miniVariantWidth')"
                />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>expandOnHover: {{ navDrawer.expandOnHover }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="navDrawer.expandOnHover" @click.stop="toggleNavDrawer('expandOnHover')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>value: {{ navDrawer.value }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="navDrawer.value" @click.stop="toggleNavDrawer('value')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-select
                  :items="colorList()"
                  :value="theme.color"
                  label="overlayColor"
                  return-object
                  @change="selectValue($event, 'navDrawer', 'overlayColor')"
                />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-select
                :items="drawerSrcList()"
                :value="navDrawer.src"
                label="src"
                return-object
                @change="selectValue($event, 'navDrawer', 'src')"
              />
            </v-list-item-content>
          </v-list-item>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>
                <v-slider
                  dense
                  :thumb-size="20"
                  thumb-label="always"
                  height="72"
                  min="240"
                  max="280"
                  :value="navDrawer.width"
                  label="width"
                  @change="selectValue($event, 'navDrawer', 'width')"
                />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>stateless: {{ navDrawer.stateless }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="navDrawer.stateless" @click.stop="toggleNavDrawer('stateless')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>touchless: {{ navDrawer.touchless }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="navDrawer.touchless" @click.stop="toggleNavDrawer('touchless')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>disableResizeWatcher: {{ navDrawer.disableResizeWatcher }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox
                v-model="navDrawer.disableResizeWatcher"
                @click.stop="toggleNavDrawer('disableResizeWatcher')"
              />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>disableRouteWatcher: {{ navDrawer.disableRouteWatcher }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox
                v-model="navDrawer.disableRouteWatcher"
                @click.stop="toggleNavDrawer('disableRouteWatcher')"
              />
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>prependSlot: {{ navDrawer.prependSlot }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="navDrawer.prependSlot" @click.stop="toggleNavDrawer('prependSlot')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>appendSlot: {{ navDrawer.appendSlot }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="navDrawer.appendSlot" @click.stop="toggleNavDrawer('appendSlot')" />
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="mb-5" cols="12">
        <v-list dense class="text-left">
          <v-subheader>Bottom Navigation</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-select
                :items="activeClassList()"
                :value="bottomNav.activeClass"
                label="active class"
                return-object
                @change="selectValue($event, 'bottomNav', 'activeClass')"
              />
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>grow: {{ bottomNav.grow }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="bottomNav.grow" @click.stop="toggleBottomNav('grow')" />
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
                  min="40"
                  max="160"
                  :value="bottomNav.height"
                  label="height"
                  @change="selectValue($event, 'bottomNav', 'height')"
                />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>
                <v-slider
                  dense
                  :thumb-size="20"
                  thumb-label="always"
                  height="72"
                  min="400"
                  max="800"
                  :value="bottomNav.width"
                  label="width"
                  @change="selectValue($event, 'bottomNav', 'width')"
                />
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text>reset</v-list-item-action-text>
              <v-btn icon right @click.stop="resetBottomNav('width')">
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>hideOnScroll: {{ bottomNav.hideOnScroll }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="bottomNav.hideOnScroll" @click.stop="toggleBottomNav('hideOnScroll')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-select
                :items="thresholdList()"
                :value="bottomNav.scrollThreshold"
                label="scroll threshold"
                return-object
                @change="selectValue($event, 'bottomNav', 'scrollThreshold')"
              />
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>horizontal: {{ bottomNav.horizontal }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="bottomNav.horizontal" @click.stop="toggleBottomNav('horizontal')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>shift: {{ bottomNav.shift }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="bottomNav.shift" @click.stop="toggleBottomNav('shift')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>mandatory: {{ bottomNav.mandatory }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="bottomNav.mandatory" @click.stop="toggleBottomNav('mandatory')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>inputValue: {{ bottomNav.inputValue }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="bottomNav.inputValue" @click.stop="toggleBottomNav('inputValue')" />
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>absolute: {{ bottomNav.absolute }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="bottomNav.absolute" @click.stop="toggleBottomNav('absolute')" />
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>fixed: {{ bottomNav.fixed }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="bottomNav.fixed" @click.stop="toggleBottomNav('fixed')" />
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
    ...mapState('navDrawer', {
      navDrawer: state => state.props
    }),
    ...mapState('footer', {
      footer: state => state.props
    }),
    ...mapState('bottomNav', {
      bottomNav: state => state.props
    }),
    ...mapState('theme', {
      theme: state => state.props
    })
  },
  methods: {
    selectTheme(dark, light) {
      this.changeTheme({ dark, light })
    },
    selectValue(value, module, prop) {
      const payload = { prop: prop, value: value }
      if (module === 'theme') {
        this.change(payload)
      } else if (module === 'appBar') {
        this.changeAppBar(payload)
      } else if (module === 'navDrawer') {
        this.changeNavDrawer(payload)
      } else if (module === 'footer') {
        this.changeFooter(payload)
      } else if (module === 'bottomNav') {
        this.changeBottomNav(payload)
      }
    },
    ...mapGetters('theme', ['colorList']),
    ...mapGetters('appBar', ['heightList', 'thresholdList', 'srcList']),
    ...mapGetters('navDrawer', { drawerSrcList: 'srcList' }),
    ...mapGetters('bottomNav', ['activeClassList']),
    ...mapActions('theme', ['change', 'changeTheme']),
    ...mapActions('appBar', ['toggleAppBar', 'changeAppBar', 'resetAppBar', 'toggleExtentionSlot']),
    ...mapActions('navDrawer', ['toggleNavDrawer', 'changeNavDrawer', 'resetNavDrawer']),
    ...mapActions('footer', ['toggleFooter', 'changeFooter', 'resetFooter']),
    ...mapActions('bottomNav', ['toggleBottomNav', 'changeBottomNav', 'resetBottomNav'])
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
  })
}
</script>
