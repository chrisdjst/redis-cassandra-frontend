import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Inicial from '../components/Inicial.vue'
import Style from '../components/Style.vue'
import Teste from '../components/ExPuxarInfo.vue'
import Perfil from '../components/Perfil.vue'
import EditarRegistro from '../components/EditarRegistro.vue'

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
    path: '/editarregistro',
    name: 'EditarRegistro',
    component: EditarRegistro
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
