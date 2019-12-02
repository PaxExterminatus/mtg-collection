<template>
  <div class="form-adding">
    <div>
      <label>Code <input v-model="newItem.code"></label>
      <label>Number <input v-model="newItem.number"></label>
    </div>
    <div>
      {{newItem}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ItemDataStructure, CollectionItemInput } from '@/store/Collection'

@Component
export default class AddForm extends Vue {
  @Prop() private msg!: string;

  newItem: ItemDataStructure = new CollectionItemInput('card');
}
</script>
