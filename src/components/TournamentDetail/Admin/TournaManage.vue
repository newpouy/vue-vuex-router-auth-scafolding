<template>
  <div class="l4">
    TournaManage
    <TreeView/>
    <MatchPop/>
    <BracketGenerator/>
  </div>
</template>

<script>
import TreeView from './TreeView.vue'
import MatchPop from './MatchPop.vue'
import BracketGenerator from './BracketGenerator.vue'
export default {
  name: 'TournaManage',
  props: {},
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    TreeView,
    MatchPop,
    BracketGenerator
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

