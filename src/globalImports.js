import Vue from 'vue'
import botaoConfirmacaoComp from './components/botaoConfirmacao.vue'
import telaLogin from './components/login.vue'

Vue.component('botaoConfirmacao', botaoConfirmacaoComp)
Vue.component('telaLogin', telaLogin)

export default {
  name: 'globalImports',
  components: {}
}
