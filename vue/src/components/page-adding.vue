<template>
  <div class="page adding">
    <h1>Adding</h1>

    <div class="form-box adding">

      <div class="form-line" v-tab-trap>
        <input tabindex="1" class="form-input" v-model="newItem.code" title="card code">
        <input tabindex="2" class="form-input" v-model="newItem.number" title="card number">
        <a tabindex="3" class="btn">Check</a>
      </div>

      <div>
        {{newItem}}
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { onlyNumbers, tabTrap } from '@/library/vue-directives/vue-forms-directives'
import { ItemDataFace, ItemVModel } from '@/store/Collection/CollectionItem'

@Component({
  directives: {
    tabTrap,
    onlyNumbers,
  }
})

export default class addingPage extends Vue {
  @Prop() private msg!: string;
  newItem: ItemDataFace = new ItemVModel('card');
}
</script>
