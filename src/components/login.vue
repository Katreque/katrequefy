<template>
  <div class="col-md-12" style="margin-top: 15px;">
    <form>
      <div class="col-md-3 form-group pull-center">
        <label>Usuário</label>
        <input type="text" class="form-control" v-model="usuario"/>
        <label>Senha</label>
        <input type="password" class="form-control" v-model="senha"/>
      </div>
      <div class="col-md-3 pull-center">
        <botao-confirmacao nome="Logar" v-on:redirect="autenticaUsuario()"></botao-confirmacao>
        <botao-confirmacao nome="Criar" v-on:redirect="criaUsuario()"></botao-confirmacao>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data: function(){
      return {
        usuario: "",
        senha: ""
      }
    },
    methods: {
      autenticaUsuario: function(){
        this.$http.post('https://polar-basin-23212.herokuapp.com/autenticar-usuario', {usuario: this.usuario, senha: this.senha})
          .then(({data}) => {
            console.log(data);
          })
      },
      criaUsuario: function(){
        this.$http.post('https://polar-basin-23212.herokuapp.com/autenticar-usuario', {usuario: this.usuario, senha: this.senha})
          .then(({data}) => {
            console.log(data);
          })
      }
    }
  }
</script>

<style>
</style>
