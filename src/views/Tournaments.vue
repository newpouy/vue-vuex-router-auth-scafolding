<template>
  <div class="">
Tournaments
    <TournaSearchBox/>
    <TournaSortBox/>
    <TournaContent/>
  </div>
</template>

<script type="text/babel">
import TournaSearchBox from '@/components/Tournaments/TournaSearchBox.vue'
import TournaContent from '@/components/Tournaments/TournaContent.vue'
import TournaSortBox from '@/components/Tournaments/TournaSortBox.vue'
export default {
  name: 'Tournaments',
  // 컴포넌트 변수 그룹
  // data() {},
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    TournaSearchBox,
    TournaContent,
    TournaSortBox
  },
  // 컴포넌트 메서드 그룹
  watch: {},
  methods: {
    fetchData () {
      this.$store.dispatch('test/getPosts')
    }
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate: () => console.log('beforeCreate'),
  created () {
    console.log('created')
    this.fetchData();
  },
  beforeMount: () => console.log('beforeMount'),
  mounted () { 
    console.log('mounted', this.$store.state.test.posts)
  },
  beforeUpdate: () => console.log('beforeUpdate'),
  updated: () => console.log('updated'),
  activated: () => console.log('activated'),
  deactivated: () => console.log('deactivated'),
  beforeDestroy: () => console.log('beforeDestroy'),
  destroyed: () => console.log('destroyed'),
  errorCaptured: () => console.log('errorCaptured')
}
</script>
<style lang="scss">
.l1  {
  border: solid;
  border-color: #464242;
  border-width: 7px;
}
.l2  {
  border: solid;
  border-color: #797474;
  border-width: 7px;
}
.l3  {
  border: solid;
  border-color: #a9a3a3;
  border-width: 7px;
}
.l4  {
  border: solid;
  border-color: #d4cfcf;
  border-width: 7px;
}
.l5  {
  border: solid;
  border-color: #e0e2e4;
  border-width: 7px;
}

.lp  {
  border: solid;
  border-color: red;
  border-width: 7px;
}
</style>
