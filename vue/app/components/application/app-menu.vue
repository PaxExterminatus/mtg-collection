<template>
<nav class="app-aside">
    <router-link to="/" :class="{'is-selected': $route.path === '/'}">adding</router-link>
    <router-link to="/collection" :class="{'is-selected': $route.path === '/collection'}">collection</router-link>
    <router-link to="/exchange" :class="{'is-selected': $route.path === '/exchange'}">exchange</router-link>
    <router-link to="/about" :class="{'is-selected': $route.path === '/about'}">about</router-link>
</nav>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class AppMenu extends Vue {}
</script>
