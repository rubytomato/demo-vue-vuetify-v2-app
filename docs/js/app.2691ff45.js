(function(e){function t(t){for(var r,a,c=t[0],l=t[1],s=t[2],d=0,m=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(m.length)m.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return l.p+"js/"+({about:"about",favorites:"favorites",friends:"friends",home:"home"}[e]||e)+"."+{about:"369c7200",favorites:"90f783ed",friends:"e324d0ef",home:"91eee62b"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1,friends:1,home:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",favorites:"favorites",friends:"friends",home:"home"}[e]||e)+"."+{about:"bddf02c4",favorites:"31d6cfe0",friends:"3f66da4b",home:"cf9e2ed0"}[e]+".css",o=l.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===o))return t()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){s=m[c],d=s.getAttribute("data-href");if(d===r||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var u=document.getElementsByTagName("head")[0];u.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=c(e);var m=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",m.name="ChunkLoadError",m.type=r,m.request=a,n[1](m)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/demo-vue-vuetify-v2-app/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var p=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"18f5":function(e,t,n){"use strict";var r=n("a159"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"}],attrs:{dark:e.theme.dark,light:e.theme.light}},[n("v-navigation-drawer",{attrs:{app:"",dark:e.theme.dark,light:e.theme.light,color:"white",right:"",temporary:""},model:{value:e.rightDrawer,callback:function(t){e.rightDrawer=t},expression:"rightDrawer"}},[n("v-list-item",{attrs:{color:"white accent-3"}},[n("v-list-item-title",{staticClass:"title grey--text"},[e._v(" Right Drawer ")])],1)],1),n("v-navigation-drawer",{attrs:{app:"",dark:e.theme.dark,light:e.theme.light,color:e.theme.color,bottom:e.navDrawer.bottom,clipped:e.navDrawer.clipped,"disable-resize-watcher":e.navDrawer.disableResizeWatcher,"disable-route-watcher":e.navDrawer.disableRouteWatcher,"expand-on-hover":e.navDrawer.expandOnHover,floating:e.navDrawer.floating,"hide-overlay":e.navDrawer.hideOverlay,"mini-variant":e.navDrawer.miniVariant,"mini-variant-width":e.navDrawer.miniVariantWidth,"mobile-break-point":e.navDrawer.mobileBreakPoint,"overlay-color":e.navDrawer.overlayColor,"overlay-opacity":e.navDrawer.overlayOpacity,permanent:e.navDrawer.permanent,right:e.navDrawer.right,src:e.navDrawer.src,stateless:e.navDrawer.stateless,temporary:e.navDrawer.temporary,touchless:e.navDrawer.touchless,width:e.navDrawer.width,height:e.navDrawer.height},on:{"update:miniVariant":function(t){return e.$set(e.navDrawer,"miniVariant",t)},"update:mini-variant":function(t){return e.$set(e.navDrawer,"miniVariant",t)}},scopedSlots:e._u([e.navDrawer.src?{key:"img",fn:function(e){var t=e.height,r=e.src;return[n("v-img",{attrs:{height:t,src:r,gradient:"to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"}})]}}:null,e.navDrawer.prependSlot?{key:"prepend",fn:function(){return[n("div",{staticClass:"pa-2"},[n("v-btn",{attrs:{block:""}},[e._v("prepend")])],1)]},proxy:!0}:null,e.navDrawer.appendSlot?{key:"append",fn:function(){return[n("div",{staticClass:"pa-2"},[n("v-btn",{attrs:{block:""},on:{click:function(t){t.stopPropagation(),e.leftDrawer=!e.leftDrawer}}},[e._v("close")])],1)]},proxy:!0}:null],null,!0),model:{value:e.leftDrawer,callback:function(t){e.leftDrawer=t},expression:"leftDrawer"}},[n("v-list-item",[n("v-list-item-title",{staticClass:"title"},[e._v(" Left Drawer ")]),n("v-btn",{attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.toggleNavDrawer("miniVariant")}}},[n("v-icon",[e._v("mdi-chevron-left")])],1)],1),n("v-divider"),n("v-list",{attrs:{nav:""}},e._l(e.menus,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.url}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),n("v-app-bar",{attrs:{app:"",dark:e.theme.dark,light:e.theme.light,color:e.theme.color,dense:e.appBar.dense,short:e.appBar.short,prominent:e.appBar.prominent,"shrink-on-scroll":e.appBar.shrinkOnScroll,"extension-height":e.appBar.extensionHeight,extended:e.appBar.extended,elevation:e.appBar.elevation,"elevate-on-scroll":e.appBar.elevateOnScroll,flat:e.appBar.flat,collapse:e.appBar.collapse,"collapse-on-scroll":e.appBar.collapseOnScroll,"hide-on-scroll":e.appBar.hideOnScroll,"inverted-scroll":e.appBar.invertedScroll,"scroll-off-screen":e.appBar.scrollOffScreen,tile:e.appBar.tile,src:e.appBar.src,"fade-img-on-scroll":e.appBar.fadeImgOnScroll,"scroll-threshold":e.appBar.scrollThreshold,"clipped-left":e.appBar.clippedLeft,"clipped-right":e.appBar.clippedRight},scopedSlots:e._u([e.extentionSlot?{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":"","fixed-tabs":"",color:"white"}},[n("v-tabs-slider",{attrs:{color:"yellow"}}),n("v-tab",[n("v-icon",[e._v("mdi-home")])],1),n("v-tab",[n("v-icon",[e._v("mdi-magnify")])],1),n("v-tab",[n("v-icon",[e._v("mdi-account")])],1)],1)]},proxy:!0}:null,{key:"img",fn:function(t){var r=t.props;return[n("v-img",e._b({attrs:{gradient:"to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"}},"v-img",r,!1))]}}],null,!0)},[e.$vuetify.breakpoint.mdAndUp?n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.leftDrawer=!e.leftDrawer}}}):e._e(),n("v-toolbar-title",[n("router-link",{staticClass:"title white--text logo",attrs:{to:"/"}},[e._v("Demo Application")]),e._v(" : "+e._s(e.offsetTop)+" ")],1),n("v-spacer"),e.$vuetify.breakpoint.mdAndUp?e._l(e.menus,(function(t){return n("v-btn",{key:t.title,attrs:{icon:"",tile:"",to:t.url}},[n("v-icon",[e._v(e._s(t.icon))])],1)})):e._e(),e.$vuetify.breakpoint.smAndDown?n("v-btn",{attrs:{icon:"",tile:""},on:{click:function(t){t.stopPropagation(),e.rightDrawer=!e.rightDrawer}}},[n("v-icon",[e._v("mdi-dots-vertical")])],1):e._e()],2),n("v-content",[n("router-view")],1),e.$vuetify.breakpoint.smAndDown?n("v-bottom-navigation",{attrs:{app:"",dark:e.theme.dark,light:e.theme.light,"background-color":e.theme.color,"active-class":e.bottomNav.activeClass,grow:e.bottomNav.grow,height:e.bottomNav.height,"hide-on-scroll":e.bottomNav.hideOnScroll,horizontal:e.bottomNav.horizontal,mandatory:e.bottomNav.mandatory,"scroll-threshold":e.bottomNav.scrollThreshold,shift:e.bottomNav.shift,width:e.bottomNav.width,"input-value":e.$vuetify.breakpoint.smAndDown}},e._l(e.menus,(function(t){return n("v-btn",{key:t.title,attrs:{to:t.url}},[n("span",[e._v(e._s(t.title))]),n("v-icon",[e._v(e._s(t.icon))])],1)})),1):e._e(),e.$vuetify.breakpoint.mdAndUp?n("v-footer",{attrs:{app:"",dark:e.theme.dark,light:e.theme.light,color:e.theme.color,padless:e.footer.padless,tile:e.footer.tile,inset:e.footer.inset,elevation:e.footer.elevation,absolute:e.footer.absolute,fixed:e.footer.fixed}},[n("v-card",{staticClass:"text-center",attrs:{color:e.theme.color,tile:"",width:"100%"}},[n("v-card-text",{staticClass:"font-weight-medium"},[e._v("2020 — Footer")])],1)],1):e._e()],1)},o=[],i=n("5530"),c=n("2f62"),l={name:"App",data:function(){return{leftDrawer:!1,rightDrawer:!1,offsetTop:0}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["d"])(["menus"])),Object(c["d"])("navDrawer",{navDrawer:function(e){return e.props}})),Object(c["d"])("appBar",{appBar:function(e){return e.props},extentionSlot:function(e){return e.extentionSlot}})),Object(c["d"])("footer",{footer:function(e){return e.props}})),Object(c["d"])("bottomNav",{bottomNav:function(e){return e.props}})),Object(c["d"])("theme",{theme:function(e){return e.props}})),methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])("navDrawer",["toggleNavDrawer"])),{},{onScroll:function(e){this.offsetTop=e.target.scrollingElement.scrollTop}})},s=l,d=(n("18f5"),n("2877")),m=n("6544"),p=n.n(m),u=n("7496"),h=n("40dc"),f=n("5bc1"),v=n("b81c"),g=n("8336"),y=n("b0af"),w=n("99d9"),b=n("a75b"),x=n("ce7e"),k=n("553a"),S=n("132d"),_=n("adda"),D=n("8860"),O=n("da13"),j=n("5d23"),C=n("34c3"),V=n("f774"),B=n("2fa4"),N=n("71a3"),T=n("fe57"),A=n("9a96"),L=n("2a7f"),E=n("269a"),I=n.n(E),P=n("f977"),F=Object(d["a"])(s,a,o,!1,null,"4e525ede",null),$=F.exports;p()(F,{VApp:u["a"],VAppBar:h["a"],VAppBarNavIcon:f["a"],VBottomNavigation:v["a"],VBtn:g["a"],VCard:y["a"],VCardText:w["b"],VContent:b["a"],VDivider:x["a"],VFooter:k["a"],VIcon:S["a"],VImg:_["a"],VList:D["a"],VListItem:O["a"],VListItemContent:j["b"],VListItemIcon:C["a"],VListItemTitle:j["c"],VNavigationDrawer:V["a"],VSpacer:B["a"],VTab:N["a"],VTabs:T["a"],VTabsSlider:A["a"],VToolbarTitle:L["a"]}),I()(F,{Scroll:P["b"]});n("a4d3"),n("e01a"),n("d3b7");var R=n("8c4f"),W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"index"},[r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" Welcome to Vuetify ")]),r("p",{staticClass:"subheading font-weight-regular"},[e._v(" For help and collaboration with other Vuetify developers, "),r("br"),e._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[e._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" What's next? ")]),r("v-row",{attrs:{justify:"center"}},e._l(e.whatsNext,(function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Important Links ")]),r("v-row",{attrs:{justify:"center"}},e._l(e.importantLinks,(function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1)],1)],1)],1)},H=[],q={name:"Index",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},z=q,M=n("62ad"),U=n("a523"),Z=n("0fd9"),G=Object(d["a"])(z,W,H,!1,null,null,null),J=G.exports;p()(G,{VCol:M["a"],VContainer:U["a"],VImg:_["a"],VRow:Z["a"]});var K=function(e){var t="demo-vue-vuetify-v2-app",n=e?e+" | "+t:t;return window.document.title=n},Q=function(e){var t="This is initial description.",n=e||t;document.querySelector("meta[name='description']").setAttribute("content",n)},X={methods:{setTitle:K,setDescription:Q}};r["a"].use(R["a"]);var Y=[{path:"/",name:"Index",component:J},{path:"/home",name:"Home",component:function(){return n.e("home").then(n.bind(null,"bb51"))},meta:{title:"home",description:"welcome"}},{path:"/favorites",name:"Favorites",component:function(){return n.e("favorites").then(n.bind(null,"48d5"))},meta:{title:"favorites",description:""}},{path:"/friends",name:"Friends",component:function(){return n.e("friends").then(n.bind(null,"6c40"))},meta:{title:"friends",description:""}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},meta:{title:"about",description:""}}],ee=new R["a"]({mode:"history",base:"/demo-vue-vuetify-v2-app/",routes:Y});ee.beforeEach((function(e,t,n){K(e.meta.title),Q(e.meta.description),n()}));var te=ee,ne=["undefined","primary","secondary","accent","success","info","warning","error","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","blue-grey","grey","black","white","transparent"],re={namespaced:!0,state:{props:{color:"primary",dark:!0,light:!1}},getters:{colorList:function(){return ne}},mutations:{change:function(e,t){"undefined"===t.value?e.props[t.prop]=void 0:e.props[t.prop]=t.value}},actions:{change:function(e,t){var n=e.commit;n("change",t)},changeTheme:function(e,t){var n=e.commit;n("change",{prop:"dark",value:t.dark}),n("change",{prop:"light",value:t.light})}}},ae=re,oe=["undefined","https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"],ie={namespaced:!0,state:{props:{bottom:!1,clipped:!1,disableResizeWatcher:!1,disableRouteWatcher:!1,expandOnHover:!1,floating:!1,miniVariant:!1,miniVariantWidth:56,mobileBreakPoint:1264,permanent:!1,right:!1,src:void 0,stateless:!1,temporary:!1,touchless:!1,hideOverlay:!1,overlayColor:void 0,overlayOpacity:void 0,value:!1,width:256,height:"100%",prependSlot:!1,appendSlot:!0}},getters:{srcList:function(){return oe}},mutations:{toggle:function(e,t){e.props[t]=!e.props[t]},change:function(e,t){"undefined"===t.value?e.props[t.prop]=void 0:e.props[t.prop]=t.value},reset:function(e,t){e.props[t]=void 0}},actions:{toggleNavDrawer:function(e,t){var n=e.commit;n("toggle",t)},changeNavDrawer:function(e,t){var n=e.commit;n("change",t)},resetNavDrawer:function(e,t){var n=e.commit;n("reset",t)}}},ce=ie,le=[40,48,56,64,72,80],se=["undefined",0,10,50,100,200,300,400,500,600,700,800,900,1e3],de=["undefined","https://picsum.photos/1920/1080?random"],me={namespaced:!0,state:{props:{color:"primary",absolute:!1,fixed:!1,dense:!1,short:!0,prominent:!1,shrinkOnScroll:!1,flat:!1,extended:!1,extensionHeight:48,elevation:void 0,elevateOnScroll:!1,collapse:!1,collapseOnScroll:!1,hideOnScroll:!1,invertedScroll:!1,scrollOffScreen:!1,tile:!0,src:void 0,fadeImgOnScroll:!1,scrollThreshold:void 0,clippedLeft:!1,clippedRight:!1},extentionSlot:!1},getters:{heightList:function(){return le},thresholdList:function(){return se},srcList:function(){return de}},mutations:{toggle:function(e,t){e.props[t]=!e.props[t]},change:function(e,t){"undefined"===t.value?e.props[t.prop]=void 0:e.props[t.prop]=t.value},reset:function(e,t){e.props[t]=void 0},toggleExtentionSlot:function(e){e.extentionSlot=!e.extentionSlot}},actions:{toggleAppBar:function(e,t){var n=e.commit;n("toggle",t)},changeAppBar:function(e,t){var n=e.commit;n("change",t)},resetAppBar:function(e,t){var n=e.commit;n("reset",t)},toggleExtentionSlot:function(e){var t=e.commit;t("toggleExtentionSlot")}}},pe=me,ue={namespaced:!0,state:{props:{padless:!0,inset:!1,tile:!0,elevation:void 0,absolute:!1,fixed:!1}},getters:{},mutations:{toggle:function(e,t){e.props[t]=!e.props[t]},change:function(e,t){"undefined"===t.value?e.props[t.prop]=void 0:e.props[t.prop]=t.value},reset:function(e,t){e.props[t]=void 0}},actions:{toggleFooter:function(e,t){var n=e.commit;n("toggle",t)},changeFooter:function(e,t){var n=e.commit;n("change",t)},resetFooter:function(e,t){var n=e.commit;n("reset",t)}}},he=ue,fe=["v-btn--active","primary","secondary","accent","success","info","warning","error","red","pink","purple","black","white","transparent"],ve={namespaced:!0,state:{props:{absolute:!1,activeClass:"v-btn--active",backgroundColor:void 0,color:void 0,fixed:!1,grow:!1,height:56,hideOnScroll:!1,horizontal:!1,inputValue:!1,mandatory:!1,scrollTarget:void 0,scrollThreshold:void 0,shift:!1,value:void 0,width:void 0}},getters:{activeClassList:function(){return fe}},mutations:{toggle:function(e,t){e.props[t]=!e.props[t]},change:function(e,t){"undefined"===t.value?e.props[t.prop]=void 0:e.props[t.prop]=t.value},reset:function(e,t){e.props[t]=void 0}},actions:{toggleBottomNav:function(e,t){var n=e.commit;n("toggle",t)},changeBottomNav:function(e,t){var n=e.commit;n("change",t)},resetBottomNav:function(e,t){var n=e.commit;n("reset",t)}}},ge=ve,ye={namespaced:!0,state:{members:[{id:1,name:"忍者セット",description:"天下をとるのはおれだ！！",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=忍者セット",color:"red lighten-5",friends:[{name:"入道ロボ",color:"cyan darken-3 white--text"},{name:"サスケロボ",color:"cyan darken-3 white--text"},{name:"ガマロボ",color:"cyan darken-3 white--text"},{name:"火トンロボ",color:"cyan darken-3 white--text"}]},{id:2,name:"スポーツセット",description:"めざせチャンピオン！！",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=スポーツセット",color:"pink lighten-5",friends:[{name:"すもうロボ",color:"cyan darken-3 white--text"},{name:"先生ロボ",color:"cyan darken-3 white--text"},{name:"ガキ大将ロボ",color:"cyan darken-3 white--text"},{name:"サッカーロボ",color:"cyan darken-3 white--text"}]},{id:3,name:"ファイアセット",description:"",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=ファイアセット",color:"purple lighten-5",friends:[{name:"ガリ勉ロボ",color:"cyan darken-3 white--text"},{name:"野球ロボ",color:"cyan darken-3 white--text"},{name:"フットボールロボ",color:"cyan darken-3 white--text"},{name:"クイシンボ―ロボ",color:"cyan darken-3 white--text"}]},{id:4,name:"わんぱくセット",description:"",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=わんぱくセット",color:"deep-purple lighten-5",friends:[{name:"ロボX",color:"cyan darken-3 white--text"},{name:"ロボZ",color:"cyan darken-3 white--text"},{name:"ドライブタマゴロー",color:"cyan darken-3 white--text"},{name:"ブンブンタマゴロー",color:"cyan darken-3 white--text"}]},{id:5,name:"スピードセット",description:"おれが一番早いダッチ！！",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=スピードセット",color:"indigo lighten-5",friends:[{name:"モグラロボ",color:"cyan darken-3 white--text"},{name:"レーサーロボ",color:"cyan darken-3 white--text"},{name:"ライダーロボ",color:"cyan darken-3 white--text"},{name:"ジェットロボ",color:"cyan darken-3 white--text"}]},{id:6,name:"タウンセット",description:"みんなでつくろうすみよい町！！",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=タウンセット",color:"blue lighten-5",friends:[{name:"出前ロボ",color:"cyan darken-3 white--text"},{name:"駅弁ロボ",color:"cyan darken-3 white--text"},{name:"牛乳ロボ",color:"cyan darken-3 white--text"},{name:"焼きイモロボ",color:"cyan darken-3 white--text"}]},{id:7,name:"トマランセット",description:"今日もはりきるダッチ！",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=トマランセット",color:"light-blue lighten-5",friends:[{name:"ドーロローラーロボ",color:"cyan darken-3 white--text"},{name:"消防ロボ",color:"cyan darken-3 white--text"},{name:"ジャングルロボ",color:"cyan darken-3 white--text"},{name:"宇宙人ロボ",color:"cyan darken-3 white--text"}]},{id:8,name:"パクパクセット",description:"お母さんと遊べるダッチ！",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=パクパクセット",color:"cyan lighten-5",friends:[{name:"コックロボ",color:"cyan darken-3 white--text"},{name:"買物ロボ",color:"cyan darken-3 white--text"},{name:"おフロロボ",color:"cyan darken-3 white--text"},{name:"トイレロボ",color:"cyan darken-3 white--text"}]},{id:9,name:"スポコンセット",description:"いくぜ！！ダッシュダ！",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=スポコンセット",color:"teal lighten-5",friends:[{name:"シャゲキロボ",color:"cyan darken-3 white--text"},{name:"スキーロボ",color:"cyan darken-3 white--text"},{name:"バーベルロボ",color:"cyan darken-3 white--text"},{name:"テニスロボ",color:"cyan darken-3 white--text"}]},{id:10,name:"オービーセット",description:"メチャンコがんばるダッチ！！",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=オービーセット",color:"green lighten-5",friends:[{name:"アイスホッケーロボ",color:"cyan darken-3 white--text"},{name:"ゴルフロボ",color:"cyan darken-3 white--text"},{name:"料理ロボ",color:"cyan darken-3 white--text"},{name:"信号ロボ",color:"cyan darken-3 white--text"}]},{id:11,name:"ゴーゴーセット",description:"どどーんとでっかく登場！",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=ゴーゴーセット",color:"light-green lighten-5",friends:[{name:"ドライブロボ",color:"cyan darken-3 white--text"},{name:"スタンドロボ",color:"cyan darken-3 white--text"},{name:"工事ロボ",color:"cyan darken-3 white--text"},{name:"ドロボーロボ",color:"cyan darken-3 white--text"}]},{id:12,name:"ドカンチセット",description:"パワフルロボダッチ大集合！",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=ドカンチセット",color:"lime lighten-5",friends:[{name:"ダンプロボ",color:"cyan darken-3 white--text"},{name:"ショベルロボ",color:"cyan darken-3 white--text"},{name:"ブルロボ",color:"cyan darken-3 white--text"},{name:"クレーンロボ",color:"cyan darken-3 white--text"}]},{id:13,name:"ガスケツセット",description:"ガソリンほっちいだっち！！",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=ガスケツセット",color:"yellow lighten-5",friends:[{name:"F-1 75",color:"cyan darken-3 white--text"},{name:"チャンピオンブガッティ",color:"cyan darken-3 white--text"},{name:"ロードプレーン",color:"cyan darken-3 white--text"},{name:"ジョニーウォーカー",color:"cyan darken-3 white--text"}]},{id:14,name:"リタイヤセット",description:"",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=リタイヤセット",color:"amber lighten-5",friends:[{name:"コブラ",color:"cyan darken-3 white--text"},{name:"F-1 Z",color:"cyan darken-3 white--text"},{name:"GT-Z",color:"cyan darken-3 white--text"},{name:"タルボトル",color:"cyan darken-3 white--text"}]},{id:15,name:"エンストセット",description:"いけねー。エンジン忘れただっち！！",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=エンストセット",color:"orange lighten-5",friends:[{name:"モーガン",color:"cyan darken-3 white--text"},{name:"トーマス",color:"cyan darken-3 white--text"},{name:"メルセデス",color:"cyan darken-3 white--text"},{name:"ロードマン",color:"cyan darken-3 white--text"}]},{id:16,name:"ピカピカセット",description:"",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=ピカピカセット",color:"deep-orange lighten-5",friends:[{name:"ブリスコ",color:"cyan darken-3 white--text"},{name:"ランドジープ",color:"cyan darken-3 white--text"},{name:"パンサー",color:"cyan darken-3 white--text"},{name:"レーサー28号",color:"cyan darken-3 white--text"}]},{id:17,name:"ギンギンセット",description:"おーっと。俺さまのお通りだー！！",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=ギンギンセット",color:"brown lighten-5",friends:[{name:"フェアレディZ",color:"cyan darken-3 white--text"},{name:"セリカ",color:"cyan darken-3 white--text"},{name:"トヨタ2000GT",color:"cyan darken-3 white--text"},{name:"ヨタ8",color:"cyan darken-3 white--text"}]},{id:18,name:"バリバリセット",description:"ハチャメチャ冒険するだっち！！",imageSrc:"https://dummyimage.com/128x128/777/fff.png&text=バリバリセット",color:"blue-grey lighten-5",friends:[{name:"ポルシェRS",color:"cyan darken-3 white--text"},{name:"ムスタングマッハ1",color:"cyan darken-3 white--text"},{name:"ジャガーE",color:"cyan darken-3 white--text"},{name:"アルファロメオ3プロト",color:"cyan darken-3 white--text"}]}]},getters:{},mutations:{},actions:{}},we=ye;r["a"].use(c["a"]);var be=new c["a"].Store({modules:{theme:ae,navDrawer:ce,appBar:pe,footer:he,bottomNav:ge,friends:we},state:{menus:[{title:"Index",icon:"mdi-web",url:"/"},{title:"Home",icon:"mdi-home",url:"/home"},{title:"Favorites",icon:"mdi-heart",url:"/favorites"},{title:"Friends",icon:"mdi-robot",url:"/friends"},{title:"About",icon:"mdi-information-variant",url:"/about"}]},getters:{},mutations:{},actions:{}}),xe=n("f309"),ke=(n("5363"),n("c15b")),Se=n("3e79");r["a"].use(xe["a"]);var _e=new xe["a"]({preset:Se["preset"],icons:{iconfont:"mdi"},lang:{current:"ja",locales:{ja:ke["a"]}},theme:{dark:!1,disable:!1,default:"light"}}),De=_e;r["a"].config.productionTip=!1,r["a"].mixin(X),new r["a"]({router:te,store:be,vuetify:De,render:function(e){return e($)}}).$mount("#app")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.63a7d78d.svg"},a159:function(e,t,n){}});
//# sourceMappingURL=app.2691ff45.js.map