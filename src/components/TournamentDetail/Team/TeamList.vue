<template>
  <div class="l3">
    TeamList
    <EachTeam/>
    <EachTeam/>
    <EachTeam/>
    <PlayerPop/>
    <TeamPop/>
  </div>
</template>

<script>
import EachTeam from './EachTeam.vue'
import PlayerPop from './PlayerPop.vue'
import TeamPop from './TeamPop.vue'
export default {
  name: 'TeamList',
  props: {},
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    EachTeam,
    PlayerPop,
    TeamPop
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

