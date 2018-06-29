<template>
  <div class="l4">
    Compensation
    <CompensInputBox/>
    <CompensPreviewPop/>
  </div>
</template>

<script>
import CompensPreviewPop from './CompensPreviewPop.vue'
import CompensInputBox from './CompensInputBox.vue'
export default {
  name: 'Compensation',
  props: {},
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    CompensPreviewPop,
    CompensInputBox
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

