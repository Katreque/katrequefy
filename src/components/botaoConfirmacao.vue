<template>
  <transition name="bounce" appear>
    <button type="button" class="btn btn-primary" v-on:click="irPath()">{{Nome}}</button>
  </transition>
</template>

<script>
  export default {
    name: 'botaoConfirmacao',
    props: ['nome', 'link'],
    data: function() {
      return {
        Nome: this.nome
      }
    },
    methods: {
      irPath: function() {
         this.$router.push(this.link);
      }
    }
  }
</script>

<style scoped>
  .btn {
    margin-right: 5px;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
