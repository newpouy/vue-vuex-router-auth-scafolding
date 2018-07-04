<template>
  <div class="l2">
    <h2>TournaWholeList</h2>
    <router-link to="/write">
      <svg height="16px" id="Layer_1" style="enable-background:new 0 0 16 16;" version="1.1" viewBox="0 0 16 16" width="16px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M2.453,9.297C1.754,9.996,1,13.703,1,14c0,0.521,0.406,1,1,1c0.297,0,4.004-0.754,4.703-1.453l5.722-5.722l-4.25-4.25  L2.453,9.297z M12,1c-0.602,0-1.449,0.199-2.141,0.891L9.575,2.175l4.25,4.25l0.284-0.284C14.746,5.504,15,4.695,15,4  C15,2.343,13.656,1,12,1z"/></svg>
      Write a new post
    </router-link>
    
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
