<template>
  <div class="application">

    <div class="counter">
      cards: {{counter.cards}}, tokens: {{counter.tokens}}
    </div>

    <div class="application-content-box">
      <nav class="aside-main">
        <router-link to="/">Adding</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <router-view class="application-content"/>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  get counter() {
    return this.$store.getters.counter;
  }
}
</script>
