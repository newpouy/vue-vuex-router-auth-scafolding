<template>
  <div class="l2">
    TournaDTree
    <Rank/><Rank/>
    <Result/><Result/>
    <ResultPop/>
    <TreeView/>
  </div>
</template>

<script>
import Rank from './Tree/Rank.vue'
import Result from './Tree/Result.vue'
import ResultPop from './Tree/ResultPop.vue'
import TreeView from './Tree/TreeView.vue'
export default {
  name: 'TournaDTree',
  props: {},
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    Rank,
    Result,
    ResultPop,
    TreeView
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

