import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Inicial from '../components/Inicial.vue'
import Style from '../components/Style.vue'
import Teste from '../components/ExPuxarInfo.vue'
import Perfil from '../components/Perfil.vue'
import EditarRegistro from '../components/EditarRegistro.vue'
import RegistroAula from '../components/RegistroAula.vue'
import AdicionarRegistro from '../components/AdicionarRegistro.vue'
import RegistroAulaAluno from '../components/RegistroAulaAluno.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/inicial',
    name: 'inicial',
    component: Inicial
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/registroaula',
    name: 'RegistroAula',
    component: RegistroAula
  },
  {
    path: '/adicionarregistro',
    name: 'AdicionarRegistro',
    component: AdicionarRegistro
  },
  {
    path: '/editarregistro',
    name: 'EditarRegistro',
    component: EditarRegistro
  },
  {
    path: '/registroaulaaluno',
    name: 'RegistroAulaAluno',
    component: RegistroAulaAluno
  },
  {
    path: '/style',
    name: 'Style',
    component: Style
  },
  {
    path: '/teste',
    name: 'Teste',
    component: Teste
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
