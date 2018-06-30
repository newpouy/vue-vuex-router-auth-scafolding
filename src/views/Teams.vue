<template>
  <div class="">
  Teams
  <TeamsHeader/>
  <TeamsMine/>
  </div>
</template>

<script type="text/babel">
import TeamsHeader from '@/components/Teams/TeamsHeader.vue'
import TeamsMine from '@/components/Teams/TeamsMine.vue'
export default {
  name: 'Teams',
  components: {
    TeamsHeader,
    TeamsMine
  }
}
</script>
