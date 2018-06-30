<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="onSubmit(email, password)">
      <input type="text" v-model="email" placeholder="Email Address">
      <input type="password" v-model="password" placeholder="Password">
      <input type="submit" value="Login">
    </form>
    <p><i>{{msg}}</i></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      msg: ''
    }
  },
  methods: {
    onSubmit (email, password) {
      console.log(this.$store)
      this.$store.dispatch('auth/LOGIN', {email, password})
        .then(() => this.redirect())
        .catch(({message}) => this.msg = message)
    },
    redirect () {
      // location.href="/"
      const {search} = window.location
      if (search === '') {
        this.$router.push('/')
      } else {
        const tokens = search.replace(/^\?/, '').split('&')
        console.log(window.location, search, tokens)
        const {returnPath} = tokens.reduce((qs, tkn) => {
          console.log(qs, tkn)
          const pair = tkn.split('=')
          qs[pair[0]] = decodeURIComponent(pair[1])
          return qs
        }, {})
        this.$router.push(returnPath)
      }
    }
  }
}
</script>

<style scoped>

</style>
