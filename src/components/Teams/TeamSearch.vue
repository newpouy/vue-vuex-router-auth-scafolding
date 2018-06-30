<template>
  <div class="l1">
    TeamSearch
    <TeamSearchBox/>
    <TeamSortBox/>
    <TeamList/>
  </div>
</template>

<script>
import TeamSearchBox from './TeamSearchBox.vue'
import TeamSortBox from './TeamSortBox.vue'
import TeamList from './TeamList.vue'
export default {
  name: 'TeamSearch',

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
