<template>
  <div class="l2">
    TournaDAdmin
    <AdminContent :test="test"/>
  </div>
</template>

<script>
import AdminContent from './Admin/AdminContent.vue'
export default {
  name: 'TournaDAdmin',
  props: {},
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    AdminContent
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

