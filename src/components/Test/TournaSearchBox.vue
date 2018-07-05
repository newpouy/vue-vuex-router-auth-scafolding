<template>
  <div class="l1">
    TournaSearchBox
    <div>

      <input id="search_word" v-model="searchWord" placeholder="여기를 수정해보세요">
<p>메시지: {{ searchWord }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TournaSearchBox',

  props: {
  },
  data () {
    return {
      searchWord: ''
    }
  },
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
  },
  // 컴포넌트 메서드 그룹
  watch: {
    searchWord: function (newWord) {
      console.log(newWord)
      this.$store.commit('test/SET_SEARCH_USER_ID', newWord)
    }
  },
  methods: {
    handle: function() {
      console.log('handle', this.searchWord)
    }
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>

</style>
