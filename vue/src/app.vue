<template>
  <div class="application">

    <div class="counter-panel">
      cards: {{counter.cards}}, tokens: {{counter.tokens}}, <a @click="collection.add">add</a>
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
    return {
      cards: this.$store.state.collection.cards.length,
      tokens: this.$store.state.collection.tokens.length,
    }
  }

  get collection() {
    return this.$store.state.collection;
  }
}
</script>
