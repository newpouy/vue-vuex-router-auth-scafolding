<template>
  <div class="l4">
    TournaRow: <span>{{ id }}</span> / <a class="user-id" v-on:click="openPop(userId)"><span>{{ userId }}</span></a></p>
    <button @click="isShownModal = true">show modal</button>
    <p>{{ title }}</p>
    <div class="popWrapper">
      <UserPop />
      <UiModal closeOnOverlay :show.sync="isShownModal" :postDetail="postDetail">
      <div class="some-modal-content">
        hi here
        <div class="buttons">
          <button @click="submitModalHandler">ok</button>
        </div>
      </div>
    </UiModal>
    </div>
  </div>
</template>

<script>
import UserPop from './UserPop.vue'
import UiModal from '@/components/commonUI/UiModal.vue'
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
  data() {
    return {
      isShownModal: false
    }
  },
  computed: {
    postDetail () {
      return { id: this.id, title: this.title }
    }
  },
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    UserPop,
    UiModal
  },
  // 컴포넌트 메서드 그룹
  watch: {},
  methods: {
    openPop: function(userId) {
      console.log('',userId)
    },
    submitModalHandler () {
      this.isShownModal = false
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
.user-id:hover {
  color: red;
  cursor: pointer;
}
.popWrapper {
  
}
</style>
