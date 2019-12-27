import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/app/components/page-adding.vue'
// import Collection from '@/app/components/page-collection.vue'
// import Exchange from '@/app/components/page-exchange.vue'
// import About from '@/app/components/page-about.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },

  // { path: '/collection', name: 'collection', component: Collection },
  // { path: '/exchange', name: 'exchange', component: Exchange },
  // { path: '/about', name: 'about', component: About },

  { path: '/collection', name: 'collection', component: () => import(/* webpackChunkName: "chunk.page.collection" */ '@/app/components/page-collection.vue') },
  { path: '/exchange', name: 'exchange', component: () => import(/* webpackChunkName: "chunk.page.exchange" */ '@/app/components/page-exchange.vue') },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "chunk.page.about" */ '@/app/components/page-about.vue') },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
