<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
  import Login from './components/login'

  export default {
    name: 'app',
    components: {
      Login
    }
  }
</script>

<style>
  p {
    font-size: 20px;
  }
</style>
