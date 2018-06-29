<template>
  <div class="l2">
    TournaDTeam
    <TeamList/>
  </div>
</template>

<script>
import TeamList from './Team/TeamList'
export default {
  name: 'TournaDTeam',
  props: {},
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    TeamList
  },
  // 컴포넌트 메서드 그룹
  watch: {},
  methods: {},
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate() {},
  mounted() {},
}
</script>

<style lang="scss" scoped>

</style>

