<template>
  <div class="l1">
    TournaContent
    <UiUploadSingle/>
    <UiUploadMulti/>
    <TournaMine/>
    <TournaFeatured/>
    <TournaWholeList/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TournaWholeList from './TournaWholeList.vue'
import TournaFeatured from './TournaFeatured.vue'
import TournaMine from './TournaMine.vue'
import UiUploadMulti from '@/components/commonUI/UiUploadMulti.vue'
import UiUploadSingle from '@/components/commonUI/UiUploadSingle.vue'
export default {
  name: 'TournaContent',
  components: {
    TournaWholeList,
    TournaMine,
    TournaFeatured,
    UiUploadMulti,
    UiUploadSingle
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
