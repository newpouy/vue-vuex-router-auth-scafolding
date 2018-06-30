<template>
  <div class="l4">
    TeamManage
    <EachTeam/><EachTeam/><EachTeam/>
  </div>
</template>

<script>
import EachTeam from './EachTeam.vue'
export default {
  name: 'TeamManage',
  props: {},
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    EachTeam
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
