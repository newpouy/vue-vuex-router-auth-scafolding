<template>
  <div class="l4">
    <p>TournaRow: <span>{{ id }}</span> / <span>{{ userId }}</span></p>
    <p>{{ title }}</p>
    <TournaComment :id="id" :comments="comments" @putcomment="putcomment"></TournaComment>
  </div>
</template>

<script>
import TournaComment from './TournaComment.vue'

export default {
  name: 'TournaRow',

  props: {
    id: {
      type: Number,
      default: ''
    },
    title: { 
      type: String,
      default: ''
    },
    userId: {
      type: Number,
      default: ''
    },
    comments:Array
  },
  // data() {},
  computed: {
  },
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    TournaComment
  },
  // 컴포넌트 메서드 그룹
  watch: {},
  methods: {
    putcomment(payload){
      this.$emit('putcomment',payload)
    }
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate () {},
  mounted () {
    // console.log('mounted', this)
  }
}
</script>

<style lang="scss" scoped>
</style>
