<template>
  <div class="">
    <h1>TournamentDetail  {{ $route.params.id }}</h1>
    <TournaDHeader />
    <TournaDContent/>
  </div>
</template>

<script type="text/babel">
import TournaDHeader from '@/components/TournamentDetail/TournaDHeader.vue'
import TournaDContent from '@/components/TournamentDetail/TournaDContent.vue'
export default {
  name: 'About',
  components: {
    TournaDHeader,
    TournaDContent
  },
  beforeCreate: () => console.log('beforeCreate'),
  created: () => console.log('created'),
  beforeMount: () => console.log('beforeMount'),
  mounted: () => console.log('mounted'),
  beforeUpdate: () => console.log('beforeUpdate'),
  updated: () => console.log('updated'),
  activated: () => console.log('activated'),
  deactivated: () => console.log('deactivated'),
  beforeDestroy: () => console.log('beforeDestroy'),
  destroyed: () => console.log('destroyed'),
  errorCaptured: () => console.log('errorCaptured')
}
</script>