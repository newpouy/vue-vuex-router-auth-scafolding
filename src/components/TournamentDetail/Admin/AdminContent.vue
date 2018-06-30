<template>
  <div class="l3">
    AdminContent {{ test }}
    <div id="nav">
      <router-link :to="{ name: 'InfoEdit'}">InfoEdit</router-link> |
      <router-link :to="{ name: 'TeamManage'}">TeamManage</router-link> |
      <router-link :to="{ name: 'TournaManage'}">TournaManage</router-link> |
      <router-link :to="{ name: 'Compensation'}">Compensation</router-link> |
      <router-link :to="{ name: 'MediaManage'}">MediaManage</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'TournaDContent',
  props: {
    test: {
      type: String,
      default: ''
    }
  },
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
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
