<template>
  <div class="">
    <h1>TeamDetail  {{ $route.params.id }}</h1>
    <TeamDHeader />
    <TeamDContent/>
  </div>
</template>

<script type="text/babel">
import TeamDHeader from '@/components/TeamDetail/TeamDHeader.vue'
import TeamDContent from '@/components/TeamDetail/TeamDContent.vue'
export default {
  name: 'TeamDetail',
  components: {
    TeamDHeader,
    TeamDContent,
  },
}
</script>