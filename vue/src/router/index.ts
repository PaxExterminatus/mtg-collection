import Vue from 'vue'
import Home from '@/components/page-adding.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/collection', name: 'collection', component: () => import(/* webpackChunkName: "chunk.page.collection" */ '@/components/page-collection.vue') },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "chunk.page.about" */ '@/components/page-about.vue') },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
