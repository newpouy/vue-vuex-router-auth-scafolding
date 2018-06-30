<template>
  <div class="l1">
    TeamsHeader <br/>
    <div>
      <router-link :to="{ name: 'TeamGenerate'}">TeamGenerate</router-link> |
      <router-link :to="{ name: 'TeamSearch'}">TeamSearch</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import TeamGenerate
export default {
  name: 'TeamsHeader',
  props: {},
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
