import Vue from 'vue'
import Home from '../components/pages/adding-page.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "chunk.page.about" */ '../components/pages/about-page.vue') }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
