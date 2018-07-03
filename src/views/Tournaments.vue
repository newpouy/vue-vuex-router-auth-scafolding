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
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate: () => console.log('beforeCreate'),
  created () {
  },
  beforeMount: () => console.log('beforeMount'),
  mounted () { 
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
%lines-shared {
  border:solid;
  border-width:7px;
}
.l1  {
  @extend %lines-shared;
  border-color: #464242;
}
.l2  {
  @extend %lines-shared;
  border-color: #797474;
}
.l3  {
  @extend %lines-shared;
  border-color: #a9a3a3;
}
.l4  {
  @extend %lines-shared;
  border-color: #d4cfcf;
}
.l5  {
  @extend %lines-shared;
  border-color: #e0e2e4;
}
.l6 {
  @extend %lines-shared;
  border-color:#f3f3f3;
}

.lp  {
  @extend %lines-shared;
  border-color: red;
}
</style>
