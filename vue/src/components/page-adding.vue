<template>
  <div class="adding-page">
    <h1>Adding</h1>

    <div class="form-adding">
      <div>
        <label>Code <input v-model="newItem.code"></label>
        <label>Number <input v-model="newItem.number"></label>
      </div>
      <div>
        {{newItem}}
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ItemDataFace, ItemDataModel } from '@/store/Collection/CollectionItem'

@Component
export default class addingPage extends Vue {
  @Prop() private msg!: string;

  newItem: ItemDataFace = new ItemDataModel('card');
}
</script>
