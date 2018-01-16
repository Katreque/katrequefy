<template>
  <div class="col-md-12" style="margin-top: 15px;">
    <form>
      <div class="col-md-3 form-group pull-center">
        <label>Usuário</label>
        <input type="text" class="form-control"/>
        <label>Senha</label>
        <input type="password" class="form-control"/>
      </div>
      <div class="col-md-3 pull-center">
        <botao-confirmacao nome="Logar" link="#"></botao-confirmacao>
        <botao-confirmacao nome="Criar" link="#"></botao-confirmacao>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    components: {}
  }
</script>

<style>
</style>
