<template>
  <div class="page adding">
    <h1 class="title header-one">Adding</h1>

    <div class="form-box adding">

      <div class="form-line" v-tab-trap>
        <input tabindex="1" class="form-input" title="code" v-model="item.code">
        <input tabindex="2" class="form-input" title="number" v-model="item.number">
        <a class="btn" tabindex="3">ADD</a>
      </div>

      <div class="form-line">
        <h2 class="title label">scryfall.com</h2>
        <a class="btn" target="_blank" :href="info.url.scryfall.en">EN</a>
        <a class="btn" target="_blank" :href="info.url.scryfall.ru">RU</a>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { tabTrap } from '@/library/vue-directives/vue-forms-directives'
import { ItemDataFace, ItemVModel, ItemVModelDefault,  CardInfo } from '@/store/Collection/CollectionItem'

@Component({
  directives: {
    tabTrap,
  }
})

export default class addingPage extends Vue {
  @Prop() private msg!: string;
  item: ItemDataFace = new ItemVModelDefault('card');
  info = new CardInfo(this.item);
}
</script>
