<template>
  <div class="l4">
    TournaRow: <span>{{ id }}</span> / <span>{{ userId }}</span></p>
    <p>{{ title }}</p>
  </div>
</template>

<script>
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
    }
  },
  // data() {},
  computed: {
  },
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
  },
  // 컴포넌트 메서드 그룹
  watch: {},
  methods: {},
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate () {},
  mounted () {
    // console.log('mounted', this)
  }
}
</script>

<style lang="scss" scoped>
</style>
