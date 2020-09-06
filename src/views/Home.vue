<template>
  <div class="home">
    <h2>Welcome Home, User {{currentOne.email}}!</h2>
    <h3>Tier: {{currentOne.tier}}</h3>
    <p>Please select your action</p>
    <b-button variant="outline-primary" @click.prevent="logout">LOGOUT</b-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  props: [],
  components: {},
  data () {
    return {
    }
  },
  methods: {
    logout () {
      console.log('LOGGING OUT')
      this.$store.commit('SET_USER', '')
      localStorage.clear()
      this.$router.push({ path: '/' })
    }
  },
  created () {},
  computed: {
    currentOne () {
      return this.$store.state.user
    }
  }
}
</script>
<style>

</style>
