<template>
  <div id="pg-landing">
        <!-- NAV LANDING START -->
        <NavLanding/>
        <!-- NAV LANDING END -->

        <!-- DISIAPKAN JIKA LEBIH DIINGINKAN -->
        <!-- <router-view :key="$route.fullPath"></router-view> -->
        <About />
        <hr>
        <Pricing />
        <hr>
        <Contact />
        <hr>
        <LoginForm />
  </div>
</template>

<script>
import NavLanding from '../components/NavLanding'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'
import LoginForm from '../components/LoginForm'
export default {
  name: 'Landing',
  props: [],
  components: {
    NavLanding,
    Contact,
    LoginForm,
    Pricing,
    About
  },
  data () {
    return {}
  },
  methods: {},
  created () {}
}
</script>

<style>

</style>
