<template>
  <div class="about">
    <h1>MyPage</h1>
      <div>
        <label>User Info:</label>
        <pre>{{user}}</pre>
      </div>
      <div>
        <label>Access Log:</label>
        <div v-for="log in accessLog">{{log.userId}}, {{log.createdAt}}</div>
      </div>
    </div>
</template>

<script type="text/babel">
import axios from 'axios'
export default {
  name: 'MyPage',
  components: {
  },
  data () {
    return {
      user: null,
      accessLog: []
    }
  },
  created () {
    axios.get('http://localhost:3000/me')
      .then(({data}) => { console.log('data', data); this.user = data.user, this.accessLog = data.accessLog })
  }
}
</script>
