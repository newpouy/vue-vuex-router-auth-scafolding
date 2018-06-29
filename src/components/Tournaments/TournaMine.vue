<template>
  <div class="l2">
    TournaMine
    <TournaCardView/>
    <TournaCardView/>
  </div>
</template>

<script>
import TournaCardView from './TournaCardView.vue'
export default {
  name: 'TournaMine',

  props: {},
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    TournaCardView
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

