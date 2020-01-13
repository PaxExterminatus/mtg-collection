<template>
<nav class="aside-main">
    <router-link to="/" :class="{'is-selected': path === '/'}">adding</router-link>
    <router-link to="/collection" :class="{'is-selected': path === '/collection'}">collection</router-link>
    <router-link to="/exchange" :class="{'is-selected': path === '/exchange'}">exchange</router-link>
    <router-link to="/about" :class="{'is-selected': path === '/about'}">about</router-link>
</nav>
</template>

<script lang="ts">
import {Vue} from "vue-property-decorator";

export default class AsideMain extends Vue {
    get path() {
        return this.$route.path;
    }
}
</script>