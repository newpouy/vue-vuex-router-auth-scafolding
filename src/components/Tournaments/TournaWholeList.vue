<template>
  <div class="l2">
    TournaWholeList
    <TournaRow/>
    <TournaRow/>
    <TournaRow/>
    <TournaRow/>
  </div>
</template>

<script>
import TournaRow from './TournaRow.vue'
export default {
  name: 'TournaWholeList',
  props: {},
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    TournaRow
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
