<template>
  <div class="pg-form-login">
    <b-form inline class="form-login">
      <label class="sr-only" for="inline-form-input-email">Email</label>
      <b-input
        id="inline-form-input-email"
        v-model="form.email"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="janedoe@mail.com"
      ></b-input>

      <label class="sr-only" for="inline-form-input-password">Password</label>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          id="inline-form-input-password"
          v-model="form.password"
          type="password"
          placeholder="secret"
        ></b-input>
      </b-input-group>

      <b-button variant="primary" form="form-login" @click.prevent="login">LOGIN</b-button>
    </b-form>
  </div>
</template>

<script>
// import 'style.scss'
export default {
  name: 'LoginForm',
  props: [],
  components: {
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log('LOGIN @ LANDINGPAGE.VUE')
      this.$store.dispatch('login', this.form)
        .then(response => {
          console.log('SUCCESS LOGIN')
          // console.log(response.data)
          console.log('what do we input?')
          console.log(this.form.email)
          console.log(this.form.password)
          const userList = response.data

          console.log('This is the user list')
          console.log(userList)

          // MOCK LOGIN VERIFICATION
          let user
          for (let i = 0; i < userList.length; i++) {
            // console.log('HELLO WORLD')
            var usr = userList[i]
            if ((usr.email === this.form.email) && (usr.password === this.form.password)) {
              console.log('YES! YOU MADE IT!')
              user = usr
              break
            }
          }

          console.log('HI HO EVERYONE!')
          console.log('meet ', user)
          // this.$store.commit('SET_LOGIN', true)
          this.$store.commit('SET_TOKEN', 'helloWorld')
          this.$store.commit('SET_USER', user)
          localStorage.setItem('access_token', 'helloWorld')
          this.$router.push({ path: '/home' })
        })
        .catch(err => {
          console.log(err.response)
          const arr = err.response.data.errors
          const code = err.response.status
          const type = err.response.statusText
          const ct = code + ' ' + type
          arr.forEach(el => {
            this.$toasted.error(`${ct}: ${el}`)
          })
        })
    }
  },
  created () {
  }
}
</script>
<style scoped>
  .form-login {
    padding: 2vh;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: #45c8ee;
  }
</style>
