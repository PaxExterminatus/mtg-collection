<template>
  <div class="page adding">
    <h1>Adding</h1>

    <div class="form-box">

      <div class="form-line">
        <input class="form-input" v-model="newItem.code">
        <input class="form-input" v-model="newItem.number">
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
