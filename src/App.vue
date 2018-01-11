<template>
  <div id="katrequefy">
    <router-view></router-view>
  </div>
</template>

<script>
  import Login from './components/login'

  export default {
    name: 'katrequefy',
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
