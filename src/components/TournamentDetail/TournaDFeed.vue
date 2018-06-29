<template>
  <div class="l2">
    TournaDFeed
    <FeedWrite/>
    <FeedList/>
  </div>
</template>

<script>
import FeedList from './Feed/FeedList.vue'
import FeedWrite from './Feed/FeedWrite.vue'
export default {
  name: 'TournaDFeed',
  props: {},
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    FeedList,
    FeedWrite
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

