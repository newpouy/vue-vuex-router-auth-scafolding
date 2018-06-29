<template>
  <div class="l3">
    FeedList
    <EachFeed/>
    <EachFeed/>
    <EachFeed/>
  </div>
</template>

<script>
import EachFeed from './EachFeed.vue'
export default {
  name: 'FeedList',
  props: {},
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    EachFeed
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

