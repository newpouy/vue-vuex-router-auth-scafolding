<template>
  <div class="l1">
    TeamDContent
    <div id="nav">
      <router-link :to="{ name: 'TeamDInfo'}">TeamDInfo</router-link> |
      <router-link :to="{ name: 'TeamDFeed'}">TeamDFeed</router-link> |
      <router-link :to="{ name: 'TeamDMember'}">TeamDMember</router-link> |
      <router-link :to="{ name: 'TeamDSchedule'}">TeamDSchedule</router-link> |
      <router-link :to="{ name: 'TeamDRecord'}">TeamDRecord</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import TeamDInfo from './TeamDInfo'
import TeamDFeed from './TeamDFeed'
import TeamDMember from './TeamDMember'
import TeamDSchedule from './TeamDSchedule'
import TeamDRecord from './TeamDRecord'

export default {
  name: 'TeamDContent',
  props: {},
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    TeamDInfo,
    TeamDFeed,
    TeamDMember,
    TeamDSchedule,
    TeamDRecord
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
