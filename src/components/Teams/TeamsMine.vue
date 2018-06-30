<template>
  <div class="l2">
    TeamsMine
    <TeamCard/><TeamCard/><TeamCard/>
  </div>
</template>

<script>
import TeamCard from './TeamCard.vue'
export default {
  name: 'TeamsMine',
  props: {},
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    TeamCard
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
