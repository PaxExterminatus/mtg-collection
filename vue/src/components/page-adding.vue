<template>
  <div class="page adding">
    <h1 class="title header-one">Adding</h1>

    <div class="form-box adding">

      <div class="form-line" v-tab-trap>
        <input tabindex class="form-input" title="code" v-model="item.code">
        <input tabindex class="form-input" title="number" v-model="item.number">
        <a class="btn" tabindex @click="show">show</a>
        <a class="btn" tabindex>save</a>
      </div>

      <div class="form-line">
        <h2 class="title label">scryfall.com</h2>
        <a class="btn" target="_blank" :href="info.url.scryfall.en">EN</a>
        <a class="btn" target="_blank" :href="info.url.scryfall.ru">RU</a>
      </div>

      <div  v-if="card">
        <div>{{card.object}} | {{card.lang}}</div>
        <div class="card-info">
          <div class="card-info-image">
            <!--          <img :src="card.image_uris.small" :alt="card.name">-->
            <!--          <img :src="card.image_uris.normal" :alt="card.name">-->
            <!--          <img :src="card.image_uris.large" :alt="card.name">-->
            <!--          <img :src="card.image_uris.art_crop" :alt="card.name">-->
            <img :src="card.image_uris.border_crop" :alt="card.name">
          </div>
          <div class="card-info-data">
            <div>name</div><div>{{card.name}}</div>
            <div>release</div><div>{{card.released_at}}</div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { tabTrap } from '@/library/vue/vue-directives/vue-forms-directives'
import { ItemDataFace, ItemVModel, ItemVModelDefault,  CardInfo, ScryfallSearchResponse, ScryfallCardFace } from '@/store/Collection/CollectionItem'

@Component({
  directives: {
    tabTrap,
  }
})

export default class addingPage extends Vue {
  @Prop() private msg!: string;
  item: ItemDataFace = new ItemVModelDefault('card');
  info = new CardInfo(this.item);
  scryfall: ScryfallSearchResponse | null = null;

  get card() {
    return this.scryfall?.card;
  }

  show() {
    axios.get(`https://api.scryfall.com/cards/search?q=set:${this.item.code.toLowerCase()}+number:${this.item.number}`)
            .then( resp => {
              this.scryfall = new ScryfallSearchResponse(resp.data);
            })
  }
}
</script>
