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
    TournaDContent,
  },
}
</script>