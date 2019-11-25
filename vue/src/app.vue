<template>
  <div class="application">
    <nav class="aside-main">
      <router-link to="/">Adding</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view class="application-content"/>
  </div>
</template>

<script lang="ts">
export default {

}
</script>
