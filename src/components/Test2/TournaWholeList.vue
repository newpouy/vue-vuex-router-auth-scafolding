<template>
  <div class="l2">
    TournaWholeList
    <div class="item" v-for="post in filteredPosts" :key="post.id">
      <TournaRow v-bind="post" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TournaRow from './TournaRow.vue'
export default {
  name: 'TournaWholeList',
  props: {},
  // data() {},
  computed: {
    ...mapState({
      posts: state => state.test.posts,
      searchOptions: state => state.test.searchOptions
    }),
    filteredPosts () {
      console.log('filtered', this.posts, this.searchOptions.userId)
      if(this.searchOptions.userId == ''){
        console.log('here')
        return this.posts
      } else {
        return this.posts.filter(el => {
          return (parseInt(this.searchOptions.userId) === el.userId)
        })
      }
    }
    // posts () {
    //   console.log('dd',this.$store.state);
    //   return this.$store.state.posts
    // }
  },
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
