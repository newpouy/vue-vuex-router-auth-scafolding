<template>
  <div class="home">
    <img src="../assets/logo.png">
    <div>{{greeting}}</div>
    <div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src

// in your app.js or similar file
import Vue from 'vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      greeting: ''
    }
  },
  created () {
    console.log('home')
    axios.get('http://localhost:3000/home')
      .then((result) => { console.log('fdsa', result); this.greeting = result.data.greeting })
  }
}

</script>
