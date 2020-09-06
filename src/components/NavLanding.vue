<template>
  <div id="nav-landing">
    <b-navbar toggleable="sm" type="transparent">
      <b-navbar-brand>
        <div>
          <b-img :src="logoSrc" fluid alt="Logo"></b-img>
        </div>
      </b-navbar-brand>

      <b-navbar-nav id="nav-land-hm">
        <b-nav-item router-link to="/landing">
          HOME
        </b-nav-item>
      </b-navbar-nav>

        <!-- Right aligned nav items -->
      <b-navbar-nav id="nav-land-rh" class="ml-auto">

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->
        <b-nav-item id="tb-about" router-link to="/landing/about">
          ABOUT
        </b-nav-item>
        <b-nav-item id="tb-pricing" router-link to="/landing/pricing">
          PRICING
        </b-nav-item>
        <b-nav-item id="tb-contact" router-link to="/landing/contact">
          CONTACT
        </b-nav-item>
        <b-nav-item id="tb-form-login" router-link to="/landing/loginForm">
          <b-button variant="outline-primary">LOGIN</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div>
      <b-img :src="imgSrc" fluid alt="Responsive image"></b-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavLanding',
  props: [],
  components: {},
  data () {
    return {
      imgSrc: require('../assets/ilustrasi_jumbotron.png'),
      logoSrc: require('../assets/sample_logo.png')
    }
  },
  methods: {
  },
  created () {}
}
</script>

<style scoped>
  /* #nav-landing {
    background: rgba(255,255,255,0.8)
  } */
  #jbtron {
    background-size: cover;
  }
  #nav-land-rh, #nav-land-hm {
    align-items: center;
    font-weight: bold;
    color: black;
  }
</style>
