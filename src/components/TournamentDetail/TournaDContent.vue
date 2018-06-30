<template>
  <div class="l1">
    TournaDContent
    <div id="nav">
      <router-link :to="{ name: 'TournaDInfo'}">TournaDInfo</router-link> |
      <router-link :to="{ name: 'TournaDFeed'}">TournaDFeed</router-link> |
      <router-link :to="{ name: 'TournaDTree'}">TournaDTree</router-link> |
      <router-link :to="{ name: 'TournaDCompens'}">TournaDCompens</router-link> |
      <router-link :to="{ name: 'TournaDTeam'}">TournaDTeam</router-link> |
      <router-link :to="{ name: 'TournaDMedia'}">TournaDMedia</router-link> |
      <router-link :to="{ name: 'TournaDAdmin'}">TournaDAdmin</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import TournaDInfo from './TournaDInfo.vue'
import TournaDFeed from './TournaDFeed.vue'
import TournaDTree from './TournaDTree.vue'
import TournaDCompens from './TournaDCompens.vue'
import TournaDTeam from './TournaDTeam.vue'
import TournaDMedia from './TournaDMedia.vue'
import TournaDAdmin from './TournaDAdmin.vue'
import {Tabs, Tab} from 'vue-tabs-component'

Vue.component('tabs', Tabs)
Vue.component('tab', Tab)

export default {
  name: 'TournaDContent',
  props: {},
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    TournaDInfo,
    TournaDFeed,
    TournaDTree,
    TournaDCompens,
    TournaDTeam,
    TournaDMedia,
    TournaDAdmin
  },
  // 컴포넌트 메서드 그룹
  watch: {},
  methods: {},
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>

</style>
