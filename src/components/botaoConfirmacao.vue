<template>
  <transition name="bounce" appear>
    <button type="button" class="btn btn-primary" v-on:click="clickEvent()">{{Nome}}</button>
  </transition>
</template>

<script>
  export default {
    name: 'botaoConfirmacao',
    props: ['nome', 'funcao'],
    data: function() {
      return {
        Nome: this.nome,
      }
    },
    methods: {
      clickEvent() {
        this.$emit('redirect');
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
