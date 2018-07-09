<template>
  <div class="l1">
    TournaContent
    <TournaMine/>
    <TournaFeatured/>
    <button @click="testDialog=true">open test dialog</button>
    <Modal v-if="testDialog" @close="testDialog=false"
    :options="[DIALOG.OPTION_XCLOSE]">
      <p slot="body">Message goes here</p>
    </Modal>
    <TournaWholeList/>
  </div>
</template>

<script>
import DIALOG from '@/components/CommonUI/MODALSETTING.js';

import { mapState, mapActions } from 'vuex'
import TournaWholeList from './TournaWholeList.vue'
import TournaFeatured from './TournaFeatured.vue'
import TournaMine from './TournaMine.vue'


export default {
  name: 'TournaContent',
  data() {
    return {
      testDialog: false,
      DIALOG,
    };
  },
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

  },
  mounted() {
    console.log('DIALOG', DIALOG);
  },
}
</script>

<style lang="scss" scoped>

</style>
