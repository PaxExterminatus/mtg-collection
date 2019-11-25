<template>
  <div class="form-adding">

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AddForm extends Vue {
  @Prop() private msg!: string;
}
</script>
