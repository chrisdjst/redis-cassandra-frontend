import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Inicial from '../components/Inicial.vue'
import Style from '../components/Style.vue'
import Teste from '../components/ExPuxarInfo.vue'

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
