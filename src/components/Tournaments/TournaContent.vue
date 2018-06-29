<template>
  <div class="l1">
    TournaContent
    <TournaMine/>
    <TournaFeatured/>
    <TournaWholeList/>
  </div>
</template>

<script>
import TournaWholeList from './TournaWholeList.vue'
import TournaFeatured from './TournaFeatured.vue'
import TournaMine from './TournaMine.vue'
export default {
  name: 'TournaContent',
  components: {
    TournaWholeList,
    TournaMine,
    TournaFeatured
  },
  props: {

  },

  methods: {

  },

  computed: {

  }
}
</script>

<style lang="scss" scoped>

</style>

