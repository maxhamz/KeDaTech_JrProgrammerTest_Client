<template>
  <div id="pg-contact" :key="contactKey">
      <h3>Contact Us</h3>
      <p>Email: sample@domain.com</p>
      <p>WA: +628102345678</p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: [],
  components: {
  },
  data () {
    return {
      contactKey: 0
    }
  },
  methods: {},
  created () {}
}
</script>

<style>

</style>
